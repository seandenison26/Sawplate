'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _redux = require('redux');

var _reducers = require('./reducers');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _clone = require('clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import FunctionalExpressServer from './ExpressWrapper'


var store = (0, _redux.createStore)(_reducers.bigDaddyReduce);

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());

app.get('/callServer', function (req, res) {
	store.dispatch({ type: 'INCREASE_SERVER_CALLS' });

	res.json(JSON.stringify({ type: 'SERVER_TOTAL', serverTotal: store.getState().serverCalls }));
});

var server = (0, _clone2.default)(app);
server.locals.name = "server";

console.log(app.locals.name);

server.listen(3000, function () {});

/*
return await FunctionalExpressServer(
	createStore(bigDaddyReduce),
	use(cors()),
	use(bodyParser.json()),
	get('/serverTotal', serverTotal)
)
*/
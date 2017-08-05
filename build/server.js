'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _redux = require('redux');

var _reducers = require('./reducers');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers.bigDaddyReduce);

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.get('/:action', function (req, res) {
	store.dispatch({ type: req.params.action });

	res.json(JSON.stringify({ type: 'SERVER_TOTAL', serverTotal: store.getState().serverCalls }));
});

app.listen(3000, function () {});
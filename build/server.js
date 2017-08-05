'use strict';

var express = require('express');
var redux = require('redux');
var reducers = require('./reducers');
var cors = require('cors');

var store = redux.createStore(reducers.bigDaddyReduce);

var app = express();

app.use(cors());

app.get('/:action', function (req, res) {
	store.dispatch({ type: req.params.action });

	res.json(JSON.stringify({ type: 'SERVER_TOTAL', serverTotal: store.getState().serverCalls }));
});

app.listen(3000, function () {});
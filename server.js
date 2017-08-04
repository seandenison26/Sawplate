const express = require("express");
const redux = require("redux");
const reducers = require("./reducers");
const cors = require("cors");

const store = redux.createStore(reducers.bigDaddyReduce);

store.subscribe(() => {console.log(store.getState())});

const app = express();

app.use(cors());

app.get('/:action', function (req, res) {
	store.dispatch({type:"INCREASE_SERVER_CALLS"});
	console.log(`This is call ${store.getState().serverCalls}!`);
	res.send(`You pressed the button ${store.getState().serverCalls} times.`)
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})

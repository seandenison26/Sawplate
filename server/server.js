const express = require('express')
const redux = require('redux')
const reducers = require('./reducers')
const cors = require('cors')

const store = redux.createStore(reducers.bigDaddyReduce)

const app = express()

app.use(cors())

app.get('/:action', function (req, res) {
	store.dispatch({type:req.params.action})
	
	res.json(JSON.stringify({type:'SERVER_TOTAL',serverTotal:store.getState().serverCalls}))
})

app.listen(3000, function () {
})



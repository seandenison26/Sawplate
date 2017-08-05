import express from 'express'
import  {createStore} from 'redux'
import  {bigDaddyReduce} from './reducers'
import cors from 'cors'

const store = createStore(bigDaddyReduce)

const app = express()

app.use(cors())

app.get('/:action', function (req, res) {
	store.dispatch({type:req.params.action})
	
	res.json(JSON.stringify({type:'SERVER_TOTAL',serverTotal:store.getState().serverCalls}))
})

app.listen(3000, function () {
})



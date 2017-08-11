import express from 'express'
import  {createStore} from 'redux'
import  {bigDaddyReduce} from './reducers'
import cors from 'cors'
import bodyParser from 'body-parser'
//import FunctionalExpressServer from './ExpressWrapper'


const store = createStore(bigDaddyReduce)

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/callServer', function (req, res) {
	store.dispatch({type:'INCREASE_SERVER_CALLS'})
	
	res.json(JSON.stringify({type:'SERVER_TOTAL',serverTotal:store.getState().serverCalls}))
})

app.listen(3000, ()=>{})


/*
return await FunctionalExpressServer(
	createStore(bigDaddyReduce),
	use(cors()),
	use(bodyParser.json()),
	get('/serverTotal', serverTotal)
)
*/

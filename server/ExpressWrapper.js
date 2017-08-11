/* eslint-disable no-nil, no-unused-expression */ 
//Potential additions

/*
app.all()
app.delete()
app.disable()
app.disabled()
app.enable()
app.enabled()
app.engine()
app.get()
app.listen()
app.METHOD()
app.param()
app.path()
app.post()
app.put()
app.render()
app.route()
app.set()
app.use()
*/

import express from 'express'
import  {createStore} from 'redux'
import  {bigDaddyReduce} from './reducers'
import {resObjChange, increaseServerCalls} from './middleware'

const FunctionalExpressServer = (...funcs) => {
	const appFuncs = [...funcs]
	const store = createStore(bigDaddyReduce);
	const app = express()
	appFuncs.forEach((func) => {func.apply(app)}) 

	return app.listen(3000, () => {})
}

export default FunctionalExpressServer

export const use = (depend) => {
	return () => {this.use(depend)} 
}

export const get = (path,...middlewares) => (appFuncs) => {
	const callback = (req,res) => {
		var resObj = {req, status: 1}, length = middlewares.length, ware = 0
	       	while(ware < length) {
			if(resObj.status !== 1) {
				break()
			}
			else {
				resObj = resObjChange(middleware[ware], resObj)
			}	
		}	
		res.json({resObj})
	}
	return () => {this.get(path,callback)};	
}









/*
methods.forEach(function(method){
  app[method] = function(path){
    if (method === 'get' && arguments.length === 1) {
      // app.get(setting)
      return this.set(path);
    }

    this.lazyrouter();

    var route = this._router.route(path);
    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});
function lazyrouter() {
  if (!this._router) {
    this._router = new Router({
      caseSensitive: this.enabled('case sensitive routing'),
      strict: this.enabled('strict routing')
    });

    this._router.use(query(this.get('query parser fn')));
    this._router.use(middleware.init(this));
  }
}
function get(app,path,callback) {
	newApp = Object.create(app)
	newApp.get(path,callback)
	return newApp;	
}








listen(PORT) {

}

use(path,callback,app) {

}

function testGet(Something) {
	const testpart1 = express()
	testpart1.get(SomethingA);

	const testpart2 = ourget()

		
}
*/

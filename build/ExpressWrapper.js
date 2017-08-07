'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Express = Express;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

//import express from 'express'
var app = (0, _express2.default)();

console.log(_http2.default.METHODS);

function Express() {
  return (0, _express2.default)();
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
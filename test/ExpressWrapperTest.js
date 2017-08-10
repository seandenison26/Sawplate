const assert = require('chai').assert
const ExpWrapper = require('../build/ExpressWrapper')
const express = require('express')

const testApp = express()

console.log(express().toString() === ExpWrapper.toString());

describe('ExpressWrapper', function() {
	it('creates a new instance of the express app()', function() {
		assert.equal(ExpWrapper.getApp().toString, testApp.toString())
	})
}) 


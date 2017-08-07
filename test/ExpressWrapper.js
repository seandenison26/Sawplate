const assert = require('chai').assert
const wrapper = require('../build/ExpressWrapper')
const express = require('express')

describe('wrapper.Express()', function() {
	it('returns a new instance of the express app object', function() {
		assert.equal(wrapper.Express(), express())
	})
}) 


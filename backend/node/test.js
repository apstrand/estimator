/* eslint-env mocha */

var assert = require('assert')
var srv = require('./server')

describe('Identity test', function () {
  it('should return the given argument', function () {
    assert.equal(42, srv.id(42))
  })
})

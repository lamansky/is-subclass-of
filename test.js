'use strict'

const assert = require('assert')
const isSubclassOf = require('.')

describe('isSubclassOf()', function () {
  it('should return false if A equals B', function () {
    assert.strictEqual(isSubclassOf(Error, Error), false)
  })

  it('should return false if A equals B (given as a string)', function () {
    assert.strictEqual(isSubclassOf(Error, 'Error'), false)
  })

  it('should return true if A is a subclass of B', function () {
    assert.strictEqual(isSubclassOf(TypeError, Error), true)
  })

  it('should return true if A is a subclass of B (given as a string)', function () {
    assert.strictEqual(isSubclassOf(TypeError, 'Error'), true)
  })

  it('should return false if A is a parent class of B', function () {
    assert.strictEqual(isSubclassOf(Error, TypeError), false)
  })

  it('should return false if A is not a subclass of B', function () {
    assert.strictEqual(isSubclassOf(Date, Error), false)
  })

  it('should return false if A is not a subclass of B (given as a string)', function () {
    assert.strictEqual(isSubclassOf(Date, 'Error'), false)
  })

  it('should return false if A is an instance of B', function () {
    assert.strictEqual(isSubclassOf(new Error(), Error), false)
    assert.strictEqual(isSubclassOf(new TypeError(), Error), false)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(isSubclassOf.call(Error, Error), false)
    assert.strictEqual(isSubclassOf.call(Error, 'Error'), false)
    assert.strictEqual(isSubclassOf.call(TypeError, Error), true)
    assert.strictEqual(isSubclassOf.call(Date, Error), false)
  })
})

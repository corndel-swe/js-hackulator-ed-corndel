import { describe, it } from 'mocha'
import assert from 'assert'
import multiply from '../src/multiply.js'

describe('multiply function', function () {
  it('should return the product of two positive numbers', function () {
    assert.strictEqual(multiply(2, 3), 6)
  })

  it('should return the product of a positive and a negative number', function () {
    assert.strictEqual(multiply(2, -3), -6)
  })

  it('should return the product of two negative numbers', function () {
    assert.strictEqual(multiply(-2, -3), 6)
  })

  it('should return 0 when one of the arguments is 0', function () {
    assert.strictEqual(multiply(0, 5), 0)
    assert.strictEqual(multiply(5, 0), 0)
  })

  it('should return the product of a number and 1', function () {
    assert.strictEqual(multiply(5, 1), 5)
    assert.strictEqual(multiply(1, 5), 5)
  })

  it('should return the product for larger numbers', function () {
    assert.strictEqual(multiply(123456, 789012), 97408265472)
  })
})

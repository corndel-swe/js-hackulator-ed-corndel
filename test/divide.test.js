import { describe, it } from 'mocha'
import assert from 'assert'
import divide from '../src/divide.js'

describe('divide function', function () {
  it('should return the quotient of two positive numbers', function () {
    assert.strictEqual(divide(15, 3), 5)
  })

  it('should return the quotient when dividing a positive number by a negative number', function () {
    assert.strictEqual(divide(15, -3), -5)
  })

  it('should return the quotient when dividing a negative number by a positive number', function () {
    assert.strictEqual(divide(-15, 3), -5)
  })

  it('should return the quotient when dividing two negative numbers', function () {
    assert.strictEqual(divide(-15, -3), 5)
  })

  it('should return 0 when dividing 0 by any number', function () {
    assert.strictEqual(divide(0, 5), 0)
  })

  it('should return Infinity when dividing a number by 0', function () {
    assert.strictEqual(divide(5, 0), Infinity)
  })

  it('should return NaN when 0 is divided by 0', function () {
    assert.strictEqual(isNaN(divide(0, 0)), true)
  })
})

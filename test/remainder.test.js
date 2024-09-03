import { describe, it } from 'mocha'
import assert from 'assert'
import remainder from '../src/remainder.js'

describe('remainder function', function () {
  it('should return the remainder of two positive numbers', function () {
    assert.strictEqual(remainder(10, 3), 1)
  })

  it('should return 0 when the first number is divisible by the second number', function () {
    assert.strictEqual(remainder(10, 5), 0)
  })

  it('should return the remainder when the first number is smaller than the second number', function () {
    assert.strictEqual(remainder(3, 10), 3)
  })

  it('should return the remainder for negative numbers', function () {
    assert.strictEqual(remainder(-10, 3), -1)
    assert.strictEqual(remainder(10, -3), 1)
  })

  it('should return 0 when both numbers are 0', function () {
    assert.strictEqual(remainder(0, 1), 0)
  })
})

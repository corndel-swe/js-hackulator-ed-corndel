import { describe, it } from 'mocha'
import assert from 'assert'
import maxOfThree from '../src/maxOfThree.js'

describe('maxOfThree function', function () {
  it('should return the maximum of three positive numbers', function () {
    assert.strictEqual(maxOfThree(1, 5, 3), 5)
  })

  it('should return the maximum when the first number is the largest', function () {
    assert.strictEqual(maxOfThree(10, 5, 7), 10)
  })

  it('should return the maximum when the second number is the largest', function () {
    assert.strictEqual(maxOfThree(4, 12, 9), 12)
  })

  it('should return the maximum when the third number is the largest', function () {
    assert.strictEqual(maxOfThree(3, 6, 8), 8)
  })

  it('should handle negative numbers correctly', function () {
    assert.strictEqual(maxOfThree(-1, -5, -3), -1)
  })

  it('should handle a mix of positive and negative numbers', function () {
    assert.strictEqual(maxOfThree(-2, 0, 5), 5)
  })

  it('should return the number itself when all numbers are the same', function () {
    assert.strictEqual(maxOfThree(7, 7, 7), 7)
  })

  it('should handle cases where two numbers are equal and the largest', function () {
    assert.strictEqual(maxOfThree(2, 8, 8), 8)
    assert.strictEqual(maxOfThree(8, 8, 2), 8)
    assert.strictEqual(maxOfThree(8, 2, 8), 8)
  })
})

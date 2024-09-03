import { describe, it } from 'mocha'
import assert from 'assert'
import average from '../src/average.js'

describe('average function', function () {
  it('should return the average of two positive numbers', function () {
    assert.strictEqual(average(4, 6), 5)
  })

  it('should return the average of a positive and a negative number', function () {
    assert.strictEqual(average(4, -2), 1)
  })

  it('should return the average of two negative numbers', function () {
    assert.strictEqual(average(-4, -6), -5)
  })

  it('should return the average when one number is zero', function () {
    assert.strictEqual(average(0, 6), 3)
    assert.strictEqual(average(6, 0), 3)
  })

  it('should return 0 when both numbers are zero', function () {
    assert.strictEqual(average(0, 0), 0)
  })

  it('should handle large numbers correctly', function () {
    assert.strictEqual(average(1000000, 2000000), 1500000)
  })
})

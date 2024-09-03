import { describe, it } from 'mocha'
import assert from 'assert'
import gcd from '../src/gcd.js'

describe('gcd function', function () {
  it('should return the greatest common divisor of two positive numbers', function () {
    assert.strictEqual(gcd(8, 12), 4)
    assert.strictEqual(gcd(10, 45), 5)
  })

  it('should return the greatest common divisor when one number is a multiple of the other', function () {
    assert.strictEqual(gcd(5, 10), 5)
  })

  it('should return the greatest common divisor when the numbers are co-prime', function () {
    assert.strictEqual(gcd(13, 17), 1)
  })

  it('should return the greatest common divisor of two large numbers', function () {
    assert.strictEqual(gcd(1701, 3786), 3)
  })
})

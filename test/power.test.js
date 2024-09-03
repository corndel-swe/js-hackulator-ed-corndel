import { describe, it } from 'mocha'
import assert from 'assert'
import power from '../src/power.js'

describe('power function', function () {
  it('should return the correct power of a positive base and exponent', function () {
    assert.strictEqual(power(2, 3), 8)
  })

  it('should return 1 when the exponent is 0', function () {
    assert.strictEqual(power(2, 0), 1)
  })

  it('should return the base when the exponent is 1', function () {
    assert.strictEqual(power(5, 1), 5)
  })

  it('should return 0 when the base is 0 and the exponent is positive', function () {
    assert.strictEqual(power(0, 3), 0)
  })

  it('should return the correct power for a negative base with an even exponent', function () {
    assert.strictEqual(power(-2, 4), 16)
  })

  it('should return the correct power for a negative base with an odd exponent', function () {
    assert.strictEqual(power(-2, 3), -8)
  })
})

import { describe, it } from 'mocha'
import assert from 'assert'
import add from '../src/add.js'

describe('add function', function () {
  it('should return the sum of two positive numbers', function () {
    assert.strictEqual(add(1, 2), 3)
  })

  it('should return the sum of two negative numbers', function () {
    assert.strictEqual(add(-1, -2), -3)
  })

  it('should return the sum of a positive and a negative number', function () {
    assert.strictEqual(add(1, -2), -1)
  })

  it('should return 0 when both arguments are 0', function () {
    assert.strictEqual(add(0, 0), 0)
  })

  it('should return the correct sum for larger numbers', function () {
    assert.strictEqual(add(123456, 789012), 912468)
  })
})

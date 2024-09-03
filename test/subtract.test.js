import { describe, it } from 'mocha'
import assert from 'assert'
import subtract from '../src/subtract.js'

describe('subtract function', function () {
  it('should return the positive difference of two positive numbers', function () {
    assert.strictEqual(subtract(5, 2), 3)
  })

  it('should return the positive difference when the first number is smaller', function () {
    assert.strictEqual(subtract(3, 7), 4)
  })

  it('should return 0 when both arguments are the same', function () {
    assert.strictEqual(subtract(5, 5), 0)
  })

  it('should return the positive difference for negative numbers', function () {
    assert.strictEqual(subtract(-5, -2), 3)
  })

  it('should return the positive difference for mixed positive and negative numbers', function () {
    assert.strictEqual(subtract(-3, 7), 10)
  })

  it('should return the positive difference for larger numbers', function () {
    assert.strictEqual(subtract(123456, 789012), 665556)
  })
})

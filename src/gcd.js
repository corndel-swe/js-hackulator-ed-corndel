/**
 * Works out the greatest common divisor of two numbers
 * Uses the euclidean algorithm: https://www.youtube.com/watch?v=JUzYl1TYMcU
 * e.g. gcd(8, 12) => 4
 */
function gcd(a, b) {
  while (a !== 0) {
    let temp = a
    a = b % a
  }
  return b
}

export default gcd

/**
 * Works out the greatest common divisor of two numbers
 * Uses the euclidean algorithm: https://www.youtube.com/watch?v=JUzYl1TYMcU
 * e.g. gcd(8, 12) => 4
 */

function gcd(a, b) {
  let big = Math.max(a, b)
  let small = Math.min(a, b)
  let r = big % small
  
  // if the equation returns no remainder, the GCD = smallest number
  if (r === 0) {
      return small
  }

  while (r !== 0) {
      r = big % small
      big = small
      small = r
      console.log(r, big, small)
  }
  return big
}

export default gcd

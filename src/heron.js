/**
 * Uses Heron's formula to calculate the area of a triangle
 * with sides of length a, b, c
 * https://en.wikipedia.org/wiki/Heron%27s_formula
 */
function heron(a, b, c) {
  const s = (a + b + c) / 2
  const area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
  return area
}

export default heron

function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x
  }

  if (y > z && y > x) {
    return y
  }

  if (z > x && z > y) {
    return z
  }
}

export default maxOfThree

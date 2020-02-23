const summation = (num) => {
  return Array(num).fill().map((_, i) => i+1).reduce((a, b) => a + b)
}

module.exports = summation
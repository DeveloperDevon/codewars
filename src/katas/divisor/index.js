const divisor = (number) => {
  const results = []
  for(let i = 1; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      results.push(i)
    }
  }
  return results.reduce((a, b) => a + b, 0)
}

module.exports = divisor
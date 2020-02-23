const mm = (divisor, bound) => {
  for (let i = bound; i >= 0; i--) {
    if (i % divisor === 0) {
      return i
    }
  }
}

module.exports = mm
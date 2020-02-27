const a = 'aretheyhere'
const b = 'yestheyarehere'

const tto = (a, b) => [...new Set(a + b)].sort().join('')

// console.log(tto(a, b))

module.exports = tto
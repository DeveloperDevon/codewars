// BEST SOLUTION
const duplicateEncoder = (string) => string.toLowerCase().split('').map((a, i, w) => w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')').join('')

// MY SOLUTION
// const duplicateEncoder = (string) => {
//   return string.toLowerCase().split('').reduce((acc, char, i, arr) => {
//     const symbol = arr.filter(letter => letter === char).length < 2 ? '(' : ')'
//     return acc + symbol
//   }, '')
// }

module.exports = duplicateEncoder
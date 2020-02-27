// const ncn = (arr) => arr.sort((a, b) => a - b).filter((a, i )=> a[i] == a[arr.length - 1] ? null : a !== arr[i+1] -1)[0]+2

const ncn = (arr) => {
  const sorted = arr.sort((a, b) => a - b) 
  for(let i = 0; i <= sorted.length; i++) {
    if (sorted[i] === sorted[sorted.length - 1]) return null
    if (sorted[i] !== sorted[i+1] - 1) return sorted[i+1]
  }
}

// BETTER SOLUTION
// const ncn = (arr) => {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1]
//     }
//   }
//   return null
// }

module.exports = ncn
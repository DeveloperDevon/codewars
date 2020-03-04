module.exports = digPow = (num, exp) => {
  const arr = num.toString().split('')
  let expNum = exp
  let total = 0
  for(let i = 0; i < arr.length; i++) {
    total += Math.pow(Number(arr[i]), expNum)
    expNum ++
  }
  return total % num === 0 ? total / num : -1
}

// BETTER
// function digPow(n, p) {
//   var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//   return x % n ? -1 : x / n
// }

// const a = digPow(92, 1)

// console.log(a)
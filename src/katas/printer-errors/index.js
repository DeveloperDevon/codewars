// const GOOD_CASE = 'aaabbbbhaijjjm'
// const BAD_CASE = 'aaaxbbbbyyhwawiwjjjwwm'

const checkIfGood = (char) => {
  const code = char.toUpperCase()
  const result = (code.charCodeAt(0) >= 65 && code.charCodeAt(0) <= 77) ? true : false
  return result
}

const printerError = (input) => {
  let errors = 0
  Array(input.length).fill().map((_, i) => {
    if (!checkIfGood(input[i])) errors++
  })

  return `${errors}/${input.length}`
}

console.log('asdfg'.match('s'))

// console.log(printerError(GOOD_CASE))
// console.log(printerError(BAD_CASE))

module.exports = { checkIfGood, printerError }
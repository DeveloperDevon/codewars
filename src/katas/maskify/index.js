const maskify = (input) => {
  const inputString = input.toString()
  let masked = ''
  for(let i = 0; i < inputString.length; i++){
    i <= inputString.length - 5 ? masked += '#' : masked += inputString[i]
  }
  return masked
}

module.exports = maskify
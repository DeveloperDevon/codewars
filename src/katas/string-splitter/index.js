const stringSplitter = (string) => {
  const arr = []
  for(let i = 0; i <= string.length - 1; i+=2) {
    arr.push(string[i] + (string[i+1] == undefined ? '_' : string[i+1]))
  }
  return arr
}

// Better Solutions
// const solution = (str) => (str.length % 2 ? str + '_' : str).match(/../g)
// const solution2 = (str) => (str + "_").match(/../g)

// console.log(stringSplitter('abcdefg'))

module.exports = stringSplitter
const TEST_ARR = ['a', 'b', 'c']

const abc123 = (arr) => {
 const newArr = []
 arr.forEach((str, i ) => newArr.push(`${i+1}: ${str}`))
 return newArr
}

// console.log(abc123(TEST_ARR))

module.exports = abc123
const divMelon = (melons) => {
  for(let n = 1; n < melons; n++) {
    n2 = melons - n
    if (n % 2 === 0 && n2 % 2 === 0) {
      return true
    }
  } return false
}

module.exports = divMelon
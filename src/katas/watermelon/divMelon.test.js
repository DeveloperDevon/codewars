const chai = require('chai')
const { expect } = chai

const divMelon = require('./index')

describe('Watermelon Divider', () => {
  it('Should return true if can be divided into 2 equal numbers', () => {
    expect(divMelon(4)).to.equals(true)
  })
})
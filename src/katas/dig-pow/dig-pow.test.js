const chai = require('chai')
const { expect } = chai

const digPow = require('./index')

describe('dig pow', () => {
  it('should do it\'s thing', () => {
    expect(digPow(89, 1)).to.equals(1)
    expect(digPow(92, 1)).to.equals(-1)
    expect(digPow(46288, 3)).to.equals(51)
  })
})
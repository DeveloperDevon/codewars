const chai = require('chai')
const { expect } = chai

const { checkIfGood, printerError } = require('./index')

describe('checkIfGood', () => {
  it('should return true if letter is a - m and false otherwise', () => {
    expect(checkIfGood('a')).to.be.true
    expect(checkIfGood('f')).to.be.true
    expect(checkIfGood('m')).to.be.true
    expect(checkIfGood('A')).to.be.true
    expect(checkIfGood('M')).to.be.true
    expect(checkIfGood('0')).to.be.false
    expect(checkIfGood('n')).to.be.false
    expect(checkIfGood('N')).to.be.false
    expect(checkIfGood('z')).to.be.false
  })
})

describe('printerError()', () => {
  it('should show printer errors', () => {
    expect(printerError('aaabbbbhaijjjm')).to.equal('0/14')
    expect(printerError('aaaxbbbbyyhwawiwjjjwwm')).to.equal('8/22')
  })
})
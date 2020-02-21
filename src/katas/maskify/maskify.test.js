const maskify = require('./index.js')

const chai = require('chai')
const { expect } = chai

describe('maskify function changes all but the last four characters into #', () => {
  it('should return a string', () => {
    expect(maskify('Rampage')).to.be.a('string')
    expect(maskify(123456789)).to.be.a('string')
  })
  it('should mask all but the last 4 characters', () => {
    expect(maskify('Rampage')).to.equals('###page')
    expect(maskify('2222222222')).to.equals('######2222')
    expect(maskify('This is a sentence')).to.equals('##############ence')
  })
})
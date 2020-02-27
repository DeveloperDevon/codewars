const chai = require('chai')
const { expect } = chai

const ncn = require('./index')

describe('Find the first non consecutive number', () => {
  it('should take an array and find the first non consecutive number', () => {
    expect(ncn([1, 2, 3, 4, 6, 7, 8])).to.equals(6)
  })
})
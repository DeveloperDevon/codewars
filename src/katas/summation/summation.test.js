const chai = require('chai')
const { expect } = chai

const summation = require('./index')

describe('Summation', () => {
  it('finds the summation of every number from 1 to num', () => {
    expect(summation(2)).to.equals(3)
    expect(summation(8)).to.equals(36)
  })
})
const solution = require('./index.js')
const chai = require('chai')
const { expect } = chai

describe('Solution', () => {
  it('adds reduces all the numbers divisble by 5 or 3 to the number passed in', () => {
    expect(solution(10)).to.equals(23)
  })
})
const chai = require('chai')
const { expect } = chai
const { zero, one, two, three, four, five, six, seven, eight, nine } = require('./numbers')
const { plus, minus, times, dividedBy } = require('./operations')

describe('Calculation with functions', () => {
  describe('number functions should return correct numbers', () => {
    expect(zero(0)).to.equals(0)
    expect(one(1)).to.equals(1)
    expect(two(2)).to.equals(2)
    expect(three(3)).to.equals(3)
    expect(four(4)).to.equals(4)
    expect(five(5)).to.equals(5)
    expect(six(6)).to.equals(6)
    expect(seven(7)).to.equals(7)
    expect(eight(8)).to.equals(8)
    expect(nine(9)).to.equals(9)
  })

  describe('operations functions should be functional', () => {
    expect(plus(3, 3)).to.equals(6)
    expect(minus(10, 3)).to.equals(7)
    expect(times(5, 5)).to.equals(25)
    expect(dividedBy(25, 5)).to.equals(5)
  })

  // describe('')
})
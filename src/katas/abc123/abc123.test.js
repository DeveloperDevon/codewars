const chai = require('chai')
const { expect } = chai

const abc123 = require('./index.js')

describe('abc123', () => {
  it('should list all the strings prepended by the right index', () => {
    expect(abc123([])).to.deep.equal([])
    expect(abc123(['a', 'b', 'c'])).to.deep.equal(['1: a', '2: b', '3: c'])
  })
})
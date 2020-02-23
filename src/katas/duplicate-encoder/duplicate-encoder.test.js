const chai = require('chai')
const { expect } = chai

const duplicateEncoder = require('./index')

describe('Duplicate Encoder', () => {
  it('should a character to ( if only present once in string', () => {
    expect(duplicateEncoder('din')).to.equals('(((')
    expect(duplicateEncoder('recede')).to.equals('()()()')
    expect(duplicateEncoder('Success')).to.equals(')())())')
    expect(duplicateEncoder('(( @')).to.equals('))((')
  })
})
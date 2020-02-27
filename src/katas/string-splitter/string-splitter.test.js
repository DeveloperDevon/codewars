const chai = require('chai')
const { assert, expect } = chai

const stringSplitter = require('./index.js')

describe('String Splitter', () => {
  it('should split string into pairs', () => {
    expect(stringSplitter('abc')).to.deep.equals(['ab', 'c_'])
    expect(stringSplitter('abcdef')).to.deep.equals(['ab', 'cd', 'ef'])
  })
})
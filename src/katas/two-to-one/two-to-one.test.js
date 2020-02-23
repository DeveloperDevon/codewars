const chai = require('chai')
const { expect } = chai

const tto = require('./index')


describe('Two to One', () => {
  it('should merge to strings', () => {
    expect(tto('aretheyhere', 'yestheyarehere')).to.equals('aehrsty')
    expect(tto('loopingisfunbutdangerous', 'lessdangerousthancoding')).to.equals('abcdefghilnoprstu')
    expect(tto('inmanylanguages', 'theresapairoffunctions')).to.equals('acefghilmnoprstuy')
  })
})
const chai = require('chai')
const { expect, assert } = chai

const mm = require('./index')

describe('Max Multiple', () => {
  it('N is divisble by divider', () => {
    expect(mm(2, 7) % 2).to.equals(0)
    expect(mm(10, 50) % 10).to.equals(0)
    expect(mm(37, 200) % 37).to.equals(0)
  })

  it('N is <= to bound', () => {
    assert.operator(mm(2, 7), '<=', 7)
    assert.operator(mm(10, 50), '<=', 50)
    assert.operator(mm(37, 200), '<=', 200)
  })

  it('N is > 0', () => {
    assert.operator(mm(2, 7), '>', 0)
    assert.operator(mm(10, 50), '>', 0)
    assert.operator(mm(37, 200), '>', 0)
    assert.equal(mm(37, 200) > 0, true)
  })
})
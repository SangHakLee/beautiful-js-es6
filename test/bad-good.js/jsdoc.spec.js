const mocha = require('mocha')
const path = require('path')
const should = require('should')
const debug = require('debug')('test')

const test = require(path.join(require('process').cwd(), '/src/bad-good.js/jsdoc'))

describe(`Bad-greeting`, () => {
  it(`should be Function`, () => {
    (test.Bad.greeting).should.be.Function()
  })
  it(`result should be string`, () => {
    const result = test.Bad.greeting()
    result.should.String()
  })
})

describe(`Good-greeting`, () => {
  it(`should be Function`, () => {
    (test.Good.greeting).should.be.Function()
  })
  it(`result should be string`, () => {
    const result = test.Good.greeting()
    result.should.String()
  })
})

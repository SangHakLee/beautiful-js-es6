const mocha = require('mocha')
const path = require('path')
const should = require('should')
const debug = require('debug')('test')

const test = require(path.join(require('process').cwd(), '/src/es6/Destructuring-Assignment'))

describe(`Destructuring-Assignment`, () => {

    let expected = {
        name: 'hak',
        age: 27,
        email: 'code.ryan.lee@gmail.com'
    }

    describe(`ES5`, () => {
        it(`should be Function`, () => {
            (test.ES5).should.be.Function()
        })
        it(`should be equal to ${JSON.stringify(expected)}`, () => {
            const result = test.ES5()
            result.should.eql(expected)
        })
    })

     describe(`ES6`, () => {
        it(`should be Function`, () => {
            (test.ES6).should.be.Function()
        })
        it(`should be equal to ${JSON.stringify(expected)}`, () => {
            const result = test.ES6()
            result.should.eql(expected)
        })
    })
})
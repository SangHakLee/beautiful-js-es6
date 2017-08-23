'use strict'

const req = {
    body: {
        name: 'hak',
        age: 27,
        email: 'code.ryan.lee@gmail.com'
    }
}


const ES5 = () => {
    var name = req.body.name
    var age = req.body.age
    var email = req.body.email

    return {name: name, age: age, email:email}
}

const ES6 = () => {
    const {name, age, email} = req.body

    return {name, age, email}
}

module.exports = {
    ES5,
	ES6,
};

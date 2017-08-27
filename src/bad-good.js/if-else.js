const Bad = {
    "if-else" : (name, age, email) => {
        if ( name && name.length > 3 ) {
            // something
            // ...
            if ( age < 30 ) {
                // something
                // ...
                if ( /이메일정규식/.test(email) ) {
                    // something
                    // ...
                    let code = true
                    let msg = 'all ok!'
                } else {
                    let code = false
                    let msg = 'email validation error'
                }
            } else {
                let code = false
                let msg = 'age validation error'
            }
        } else {
            let code = false
            let msg = 'name validation error'
        }

        return {code, msg}
    }
}

const Good = {
    
    "if-else" : (name, age, email) => {
        try {
            if ( !name || name.length < 4 ) {
                throw 'name validation error'
            }
            if ( age >= 30 ) {
                throw 'age validation error'
            }
            if ( !/이메일정규식/.test(email) ) {
                throw 'email validation error'
            }

            // something
            // ...
            return {code: true, msg: 'all ok!'}
        } catch(e) {
            return {code: false, msg: e}
        }
    }
}



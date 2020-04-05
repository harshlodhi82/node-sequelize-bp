const { check, validationResult } = require('express-validator');

const user_validators = {
    signUp: [
        check('username').isEmail(),
        check('password').isLength({ min: 5 })
    ],


}

module.exports = user_validators
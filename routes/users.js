const router = require('express').Router()
const { routes } = require('../helper')
const controller = require('../controllers/users')
const { user_validators } = require('../middleware/req_validators')

router.get(routes.DEFAULT, user_validators.signUp, controller.apiDemo)

module.exports = router;

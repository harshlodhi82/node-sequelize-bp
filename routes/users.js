const router = require('express').Router()
const { routes } = require('../helper')
const controller = require('../controllers/users')

router.get(routes.DEFAULT, controller.apiDemo)

module.exports = router;

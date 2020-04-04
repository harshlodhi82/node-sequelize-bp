const router = require('express').Router();
const { routes } = require('../helper')

/* GET home page. */
router.get(routes.DEFAULT, function (req, res, next) {
  res.render('index', { title: 'WIG-Web' });
});

module.exports = router;

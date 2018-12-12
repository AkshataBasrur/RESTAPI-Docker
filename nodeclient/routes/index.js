var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hogwarts School of Wizardary and Witchcraft' });
});

module.exports = router;

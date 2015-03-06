var express = require('express');
var Router  = require('router');
var router  = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('common/index');
});

module.exports = router;

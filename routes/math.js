var express = require('express');
var router = express.Router();
// const { check, validationResult } = require('express-validator/check');
var ensureAuthenticated = require('../datum/authentication');

router.get('/',ensureAuthenticated,function(req, res, next) {
  res.send('Hello, math');
  // res.render('math',{title: '数学-琥珀'});
});

module.exports = router;


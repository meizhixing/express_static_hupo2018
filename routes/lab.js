var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
  res.send('Hello, lab');
  // res.render('lab',{title: ' 实验室-琥珀'});
});

module.exports = router;

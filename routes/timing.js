var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
  res.send('Hello, 时间');
  // res.render('timing',{title: '时间-琥珀'});
});

module.exports = router;

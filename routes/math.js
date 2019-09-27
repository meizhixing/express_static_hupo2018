var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
  res.send('Hello, math');
  // res.render('math',{title: '数学-琥珀'});
});

module.exports = router;

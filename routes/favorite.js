var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
  res.send('Hello, favorite');
  // res.render('favorite',{title: '收藏夹-琥珀'});
});

module.exports = router;

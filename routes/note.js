var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
  res.send('Hello, note');
  // res.render('note',{title: '笔记本-琥珀'});
});

module.exports = router;

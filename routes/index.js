var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
//  res.send('Hello router index');
  res.render('index', {title: 'home-whyiszero',welcometext: '欢迎来到的我幻境\n 为什么是零'});
});
module.exports = router;

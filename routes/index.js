var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
//  res.send('Hello router index');
  res.render('index', {title: 'Li-Note'});
});
module.exports = router;

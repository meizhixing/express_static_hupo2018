var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
  res.render('console', {title: 'DB-console'});
});
module.exports = router;

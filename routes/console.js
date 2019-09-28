const express = require('express');
const router = express.Router();
let conn = require('../datum/conn');

router.get('/',function(req, res, next) {
  dbname='no db';
  dbname='connecting to ' + conn.host + ':' + conn.port;
  dbname=dbname + '\n' + 'database name: '+ conn.name;
  // from pug default dir 'views' to target pug
  res.render('components/console', {container: {title: 'console-whyiszero'}, console: {dbname: dbname}});
});
module.exports = router;

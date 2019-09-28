var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
//  res.send('Hello router index');
  res.render('index', {container: {title: 'home-whyiszero',welcometext: '欢迎来到我de幻境', websitename: '为什么是零',about: 'http://114.116.15.10:8005/about'}, memos: [{txt: 'memo some text here'}, 'name2'], blackboard: [{txt: 'welcome 1, blackboard', leftpx: '200px', toppx: '50px'},{txt: 'welcome2, blackboard', leftpx: '300px', toppx: '150px'}], memo: [{id: 'a12345memo', txt: 'memo A', leftpx: '300px', toppx: '50px'},{id: 'a12346memo',txt: 'memo B', leftpx: '50px', toppx: '520px'}]});
});
module.exports = router;

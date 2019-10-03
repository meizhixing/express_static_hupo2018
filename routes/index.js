var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
//  res.send('Hello router index');
  res.render('index', {container: {title: 'home-whyiszero',welcometext: '欢迎来到我de幻境', websitename: '为什么是零',about: 'http://114.116.15.10:8005/about'}, memos: [{txt: 'memo some text here'}, 'name2'], blackboard: [{txt: 'welcome 1, blackboard', leftpx: '200px', toppx: '50px'},{txt: 'welcome2, blackboard', leftpx: '300px', toppx: '150px'}], memo: [{id: 'a1234memo', txt: 'memo A', leftpx: '300px', toppx: '50px'},{id: 'a1234memo',txt: 'memo B', leftpx: '50px', toppx: '520px'}]});
});

router.get('/about',function(req, res, next) {
  res.render('about',{container: {title: 'about-whyiszero'}, about: {txt: '零是清空自我，回归本心；\n零是放下攀缘，简单生活单纯工作；\n零是不动，朝九晚五；\n零是万里晴空，乘着风去个山峦叠翠的地方发呆 ...\n不止步于在文字；\n清零，跟着心路；\n尽管不知码出个什么物；\n呃，应该有用有趣 ...'}});
});

module.exports = router;

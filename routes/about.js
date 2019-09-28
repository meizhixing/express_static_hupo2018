var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
  res.render('about',{container: {title: 'about-whyiszero'}, about: {txt: '零是清空自我，回归本心；\n零是放下攀缘，简单生活单纯工作；\n零是不动，朝九晚五；\n零是万里晴空，乘着风去个山峦叠翠的地方发呆 ...\n不止步于在文字；\n清零，跟着心路；\n尽管不知码出个什么物；\n呃，应该有用有趣 ...'}});
});

module.exports = router;

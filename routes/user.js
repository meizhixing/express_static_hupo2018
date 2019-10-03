var express = require('express');
var router = express.Router();
var {check, validationResult} = require('express-validator');
var mongoose = require('mongoose');
var userModel = require('../datum/user').userModel;

router.get('/',function(req, res, next) {
  //res.send('Hello, User');
  res.render('user/user',{container: {title: '用户管理'}});
});

router.get('/login',function(req, res, next) {
  //res.send('Hello, User');
  res.render('user/login',{container: {title: '登录'}});
});

router.post('/login',function(req, res, next) {
  // console.log('test console');
  // res.send("thank you client ");
  res.send("username: " + req.body.username + " password: " + req.body.password);
  // res.send("username: " + req.query.username + " password: " + req.query.password);
});


router.get('/register',function(req, res, next) {
  //res.send('Hello, User');
  res.render('user/register',{container: {title: '注册'}});
});

router.post('/register',[
    check('nickname').isLength({min: 1}).withMessage('请输入昵称'),
    check('username').isLength({min: 1}).withMessage('请输入用户名'),
    check('password').isLength({min: 6}).withMessage('请输入密码'),
    check('passwordconfirm').isLength({min: 6}).custom((value,{req,loc,path}) => {
      if (value !== req.body.passwordconfirm) {
        throw new Error("密码不匹配");
      } else {
        return value;
      }
    })
  ],function(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render('user/register', {container: {title: '注册'}, errors: errors.array()})
  } else {
    // console.log('test console');
    // res.send("thank you client ");
    res.send("nickname: " + req.body.nickname + " username: " + req.body.username + " password: " + req.body.password + " password confirm: " + req.body.passwordconfirm);
    // http://www.mongoosejs.net/docs/index.html
    var userinstance = new userModel({nickname: req.body.nickname, username: req.body.username, password: req.body.password })
    // userinstance.speak();
    userinstance.save(function (err, userinstance) {
      if (err) return console.error(err);
      userinstance.speak();
    });
    userModel.find(function (err, models) {
      if (err) return console.error(err);
    console.log(models);
    });

  }
});

module.exports = router;
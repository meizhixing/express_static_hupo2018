'use strict';
const express = require("express");
const path = require("path");
const bodyparser = require('body-parser');


var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var favoriteRouter = require('./routes/favorite');
var noteRouter= require('./routes/note');
var timingRouter = require('./routes/timing');
var mathRouter = require('./routes/math');
var labRouter = require('./routes/lab');
var consoleRouter = require('./routes/console');

let conn = require('./datum/conn');
conn.on('error',function(err) {
  console.log(err);
});
conn.once('open',()=>{console.log('connect to mongodb successfully')});

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/',indexRouter);
app.use('/user',userRouter);
app.use('/favorite',favoriteRouter);

app.use('/note',noteRouter);
app.use('/timing',timingRouter);
app.use('/math',mathRouter);
app.use('/lab',labRouter);
app.use('/console',consoleRouter);

app.listen(5005,()=>console.log('Example app listening on port 5005!'));

'use strict';
const express = require("express");
const path = require("path");
const pug = require("pug");

var aboutRouter = require('./routes/about');
var indexRouter = require('./routes/index');
var noteRouter= require('./routes/note');
var favoriteRouter = require('./routes/favorite');
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

app.use(express.static(path.join(__dirname,'public')));

app.use('/about',aboutRouter);
app.use('/',indexRouter);
app.use('/note',noteRouter);
app.use('/favorite',favoriteRouter);
app.use('/timing',timingRouter);
app.use('/math',mathRouter);
app.use('/lab',labRouter);
app.use('/console',consoleRouter);

app.listen(5005,()=>console.log('Example app listening on port 5005!'));

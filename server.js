var express = require("express");
var path = require("path");

var aboutRouter = require('./routes/about');
var indexRouter = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname,'public')));
app.use('/about',aboutRouter);
app.use('/',indexRouter);

app.listen(5005,()=>console.log('Example app listening on port 5005!'));

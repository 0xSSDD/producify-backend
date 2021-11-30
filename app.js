var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var todoRouter = require('./routes/todo');
var factsRouter = require('./routes/facts');
var recepiesRouter = require('./routes/recepies');

var mongoose = require('mongoose');
const uri = "mongodb+srv://user1:user1@cluster0.esluu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connection = mongoose.connect(uri);
var app = express();
var cors = require('cors')

app.use(cors())

connection.then(db => {
  console.log("connected");
}, (err) =>{
  console.log(err);
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/todo', todoRouter);
app.use('/facts', factsRouter);
app.use('/recepies', recepiesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('err');
});

module.exports = app;

var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    Todo.find().exec((error, result) => {
      if (error) {
        res.json({
          'success': false,
          'message': 'failed to get todos'
        })
      }
      res.json({
        'success': true,
        data: result
      });
    })
  } catch (err) {
    console.log(err);
  }
  
});

router.post('/', function(req, res, next) {
  const todo = req.body.description;
  Todo.create({description: todo}).then(todo => {
    res.statusCode = 200;
    res.json({
      'success': true,
      'data': todo
    })
  }, (err) => next(err)).catch((err) => {console.log(err); next(err)});
});

router.put('/:id', function(req, res, next) {
  const todoId = req.params.id;
  const newDescription = req.body.description;
  Todo.updateOne({_id: todoId}, {description: newDescription}).then(todo => {
    res.statusCode = 200;
    res.json({
      'success': true,
      'message': 'todo is updated successfully'
    })
  }, (err) => next(err)).catch((err) => {console.log(err); next(err)});
});

router.delete('/:id', function(req, res, next) {
  const todoId = req.params.id;
  Todo.deleteOne({_id: todoId}).then(todo => {
    res.statusCode = 200;
    res.json({
      'success': true,
      'message': 'todo is deleted successfully'
    })
  }, (err) => {console.log("errororooror===> ",err);next(err)}).catch((err) => {console.log(err); next(err)});
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Recepies = require('../models/recepies');

router.get('/', function(req, res, next) {
  try {
    Recepies.find().exec((error, result) => {
      if (error) {
        res.json({
          'success': false,
          'message': 'failed to get recepies'
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
  const recepieTitle = req.body.title;
  const recepieDescription = req.body.description;
  const recepieIngedients = req.body.ingredients;
  Recepies.create({title: recepieTitle, description: recepieDescription, ingredients: recepieIngedients}).then(rec => {
    res.statusCode = 200;
    res.json({
      'success': true,
      'data': rec
    })
  }, (err) => next(err)).catch((err) => {console.log(err); next(err)});
});

module.exports = router;

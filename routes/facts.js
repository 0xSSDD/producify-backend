var express = require('express');
var router = express.Router();
var Facts = require('../models/facts');

router.get('/', function(req, res, next) {
  try {
    Facts.find().exec((error, result) => {
      if (error) {
        res.json({
          'success': false,
          'message': 'failed to get facts'
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
  const fact = req.body.description;
  Facts.create({description: fact}).then(fact => {
    res.statusCode = 200;
    res.json({
      'success': true,
      'data': fact
    })
  }, (err) => next(err)).catch((err) => {console.log(err); next(err)});
});

module.exports = router;

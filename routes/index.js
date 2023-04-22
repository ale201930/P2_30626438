var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let name = 'Alexander Almaguer'


  res.render('index', {
    title: 'Programación 2, 2023-1',
    name: name,
  });
});

module.exports = router;
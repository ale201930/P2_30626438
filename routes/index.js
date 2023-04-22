var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let name = 'Alexander Almaguer'


  res.render('index', {
    title: 'Curriculum Vitae',
    name: name,
  });
});

module.exports = router;
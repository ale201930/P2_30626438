var express = require('express');
const db = require('../database');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let name = 'Alberto Rodriguez'
  res.render('index', {
    title: 'Programación 2, 2023-1',
    name: name,
  });
});

router.post('/', function(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let comment = req.body.comment;
  let date = new Date();
  let fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  let time = fecha;
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const IP = ip.split(",")[0];

  db.insert(name, email, comment, time, IP, );

  console.log ({name, email, comment, time, IP, });

  res.redirect('/');
});

router.get('/contactos', function(req, res, next) {
  db.select(function (rows) {
    console.log(rows);
  });
  res.send('ok');
});

module.exports = router;
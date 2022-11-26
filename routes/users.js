var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello Kitty');
  res.status(200).json({
    fullname:'Tanatat Wongpunyanurak'
  })
});
router.get('/bio', function(req, res, next) {
  //res.send('Hello Kitty');
  res.status(200).json({
    fullname:'Tanatat Wongpunyanurak',
    nickname:'Boom',
    hobby:'play game and lisen music',
    gitusername:'Buukunn'
  })
});

module.exports = router;

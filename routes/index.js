var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

var user = require('../mock/user.json');

//使用.json文件Mock
router.get('/user/', function(req, res, next) {
  res.json(Mock.mock(user));
});



router.post('/list/', function(req, res, next) {
  var page = parseInt(req.page) || 1

  //使用mock.js语法进行mock
  var template = {
    'title': 'list demo',
    'list|10': [{
      src: Mock.Random.image('250x250'),
    }],
    'meta': {
      page: ++page,
      limit: 10,
      pages: 100
    }
  }

  var data = Mock.mock({
    'code': 200,
    'data': template
  })

  console.log(data);

  res.json(data)
});


module.exports = router;
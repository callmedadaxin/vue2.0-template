var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

var user = require('../mock/user.json');

//使用.json文件Mock
router.get('/user/', function(req, res, next) {
  res.json(Mock.mock(user));
});

//使用mock.js语法进行mock
var template = {
  'title': 'Syntax Demo',

  'string1|1-10': '★',
  'string2|3': 'value',

  'number6|123.10': 1.123,

  'boolean2|1-2': true,

  'object1|2-4': {
    '110000': '北京市',
    '120000': '天津市',
    '130000': '河北省',
    '140000': '山西省'
  },
  'object2|2': {
    '310000': '上海市',
    '320000': '江苏省',
    '330000': '浙江省',
    '340000': '安徽省'
  },

  'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
  'array2|1-10': ['Mock.js'],
  'array3|3': ['Mock.js'],

  'function': function() {
    return this.title
  }
}
var data = Mock.mock({
  'code': 200,
  'data': template
})

router.get('/list/', function(req, res, next) {
  res.json(data);
});


module.exports = router;
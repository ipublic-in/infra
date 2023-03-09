var express = require('express')
var api = express()
var front = express()

api.get('/api', function (req, res) {
    console.log('inside api /api');
    res.send('hello world from api')
})

front.get('/', function (req, res) {
    console.log('inside front /')
    res.send('hello world from front')
})

api.listen(3001);
front.listen(3000);
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/v5/index.html'));
});

app.use(express.static('v5/static'))

app.listen(3000);
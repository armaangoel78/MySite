var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/v5/index.html'));
});

app.use(express.static('v5/static'))

console.log('Starting server on port ' + port) 
app.listen(port);

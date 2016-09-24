var express = require('express');

var app = express();
var port = 5000;
app.listen(port, (err) => console.log('running app on port: ' + port));
var express = require('express');
var routes = require('./routes/index');

var app = express();
var port = process.env.PORT || 5000;

app.use('/api', routes);

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(port, () => console.log('gulp is running my app on port: ' + port));
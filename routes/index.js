var express = require('express');
var router = express.Router();

var books = require('./books');

router.get('/books', books.getAllBooks);

module.exports = router;
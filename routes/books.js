var promise = require('bluebird');
var options = {promiseLib: promise};

var pgp = require('pg-promise')(options);
var con = {
    host: 'localhost',
    port: 5432,
    database: 'bookapi',
    user: 'mymac',
    password: 'mymac'
};
// var connectionString = 'postgres://localhost:5432/bookapi';
var db = pgp(con);

function getAllBooks(req, res, next) {
    db.any('select * from books')
        .then((data) => {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'retrieved all books'
                });
        })
        .catch((err) => next(err));
}

module.exports = {
    getAllBooks: getAllBooks
};
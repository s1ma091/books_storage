var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var dbas = mongojs('mongodb://Dima:smart1991@ds137100.mlab.com:37100/mytasklist_dima', ['books']);
//Get books
router.post('/books', function (req, res, next) {
    dbas.books.find({ user: req.body.id }, function (err, books) {
        if (err) {
            res.send(err);
        }
        res.json(books);
    });
});
// Get Single Book
router.put('/book/:id', function (req, res, next) {
    dbas.books.find({ _id: mongojs.ObjectId(req.params.id) }, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
});
//Save Book
router.post('/book', function (req, res, next) {
    var imagedata = ''
    var book = req.body;
    req.on('data', function (chunk) {
        imagedata += chunk
    })
    var fs = require('fs');
    fs.writeFile("/", 'imagedata', function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
    dbas.books.save(book, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
});
// Delete Book
router.delete('/book/:id', function (req, res, next) {
    dbas.books.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.json(book);
    });
});
// Update Book
router.post('/book/:id', function (req, res, next) {
    var book = req.body;
    var updTask = {};
    updTask.title = book.title;
    updTask.author = book.author;
    updTask.status = book.status;
    updTask.description = book.description;
    updTask.raiting = book.raiting;
    updTask.user = book.user;
    updTask.date = book.date;
    if (book.fileData) {
        updTask.fileData = book.fileData;
    }
    var fs = require('fs');
    fs.writeFile("/document.docx", book.fileData, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    if (!updTask) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        dbas.books.update({ _id: mongojs.ObjectId(req.params.id) }, updTask, {}, function (err, book) {
            if (err) {
                res.send(err);
            }
            res.json(book);
        });
    }
});

module.exports = router;
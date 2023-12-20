"use strict";

var express = require('express');

var app = express();
var port = 4000;

var cors = require('cors');

var path = require('path');

app.use(express["static"](path.join(__dirname, '../build')));
app.use('/static', express["static"](path.join(__dirname, 'build//static')));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var bodyParser = require("body-parser"); //Here we are configuring express to use body-parser as middle-ware.


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); // getting-started.js

var mongoose = require('mongoose');

main()["catch"](function (err) {
  return console.log(err);
});

function main() {
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect('mongodb+srv://admin:admin@martinscluster.w5rtkz0.mongodb.net/DB14?retryWrites=true&w=majority'));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

var bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});
var bookModel = mongoose.model('dfgdfgdfgdfg5r5645634fggh', bookSchema);
app["delete"]('/api/book/:id', function _callee(req, res) {
  var book;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("Delete: " + req.params.id);
          _context2.next = 3;
          return regeneratorRuntime.awrap(bookModel.findByIdAndDelete(req.params.id));

        case 3:
          book = _context2.sent;
          res.send(book);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.put('/api/book/:id', function _callee2(req, res) {
  var book;
  return regeneratorRuntime.async(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("Update: " + req.params.id);
          _context3.next = 3;
          return regeneratorRuntime.awrap(bookModel.findByIdAndUpdate(req.params.id, req.body, {
            "new": true
          }));

        case 3:
          book = _context3.sent;
          res.send(book);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.post('/api/book', function (req, res) {
  console.log(req.body);
  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author
  }).then(function () {
    res.send("Book Created");
  })["catch"](function () {
    res.send("Book NOT Created");
  });
}); // app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/api/books', function _callee3(req, res) {
  var books;
  return regeneratorRuntime.async(function _callee3$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(bookModel.find({}));

        case 2:
          books = _context4.sent;
          res.json(books);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.get('/api/book/:identifier', function _callee4(req, res) {
  var book;
  return regeneratorRuntime.async(function _callee4$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log(req.params.identifier);
          _context5.next = 3;
          return regeneratorRuntime.awrap(bookModel.findById(req.params.identifier));

        case 3:
          book = _context5.sent;
          res.send(book);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}); //add at the bottom just over app.listen
// Handles any requests that don't match the ones above

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});
'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Question = require('./models/qa.model')
const PORT = process.env.PORT || 3000;

const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_DB = 'questionasker';
const MONGODB_URL_PREFIX = MONGODB_USER ? `${MONGODB_USER}:${MONGODB_PASS}@` : '';

const MONGODB_URL = `mongodb://${MONGODB_URL_PREFIX}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`;

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/question', (req, res) => {
  Question.create(req.body, (err, data) => {
    if (err) throw err;
    res.redirect(`/${data.url}`)
  });
});

app.get('/:question', (req, res) => {
  Question.findOne({url: req.params.question}, (err, data) => {
    if (err) throw err;
    if (data === null) {
      res.redirect('/');
    }
    res.render('answer', {words: data});
  });

});

//
// connect
mongoose.connect(MONGODB_URL, (err) => {
  if (err) throw err;
  // listen
  app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
  });

});

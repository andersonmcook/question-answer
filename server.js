'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Question = require('./models/qa.model')
const PORT = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));

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
  console.log(req);
  Question.findOne({url: req.params.question}, (err, data) => {
    if (err) throw err;
    res.render('answer', {words: data});
  });

});


// connect
mongoose.connect('mongodb://localhost:27017/question-answer', (err) => {
  if (err) throw err;
  // listen
  app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
  });

});

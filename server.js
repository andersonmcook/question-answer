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
  res.send('home');
});

app.post('/:question', (req, res) => {
  Question.create ///
});


// connect
mongoose.connect('mongodb://localhost:27017/question-answer', (err) => {
  if (err) throw err;
  // listen
  app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
  });

});

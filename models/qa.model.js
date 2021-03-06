'use strict';

const mongoose = require('mongoose');

const Question = mongoose.Schema({
  question: String,
  answer: String,
  url: String,
  questioncolor: String,
  answercolor: String,
  topcolor: String,
  bottomcolor: String,
  questionfont: String,
  answerfont: String
});

// before save, create url from question
Question.pre('save', function (next) {
  this.url = this.question.replace(/[\?\s+/<>(){},]/g, "").toLowerCase();
  next();
});

module.exports = mongoose.model('Questions', Question);


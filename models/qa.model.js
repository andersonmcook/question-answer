'use strict';

const mongoose = require('mongoose');

const Question = mongoose.Schema({
  question: String,
  answer: String,
  url: String
});

Question.pre('save', function (next) {
  this.url = this.question.replace(/\?/g, "").split(" ").join("").toLowerCase();
  next();
});

module.exports = mongoose.model('Questions', Question);


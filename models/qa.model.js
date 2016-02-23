'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Questions', mongoose.Schema({
  question: String,
  answer: String
}));


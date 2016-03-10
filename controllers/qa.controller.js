'use strict'

const Question = require('../models/qa.model')

module.exports = {

// render answer
  renderAnswer (req, res) {
    Question.findOne({url: req.params.question}, (err, data) => {
      if (err) throw err;
      if (data === null) {
        res.redirect('/');
      }
      res.render('answer', {words: data});
    });
  }
}

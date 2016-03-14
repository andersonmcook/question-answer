'use strict'

const express = require('express')
const app = express()
const Question = require('../models/qa.model')

module.exports = {

// render answer
  renderAnswer (req, res) {
    Question.findOne({url: req.params.question}, (err, data) => {
      if (err) throw err
      if (data === null) {
        res.redirect('/')
      } else if (data.answerfont === undefined) {
        console.log('undefined options', data)
        // const defaultPres = {
        //   questioncolor: 'black',

        // }
        data.questioncolor = data.questioncolor || 'black'
        data.answercolor = data.answercolor || 'black'
        data.topcolor = data.topcolor || 'white'
        data.bottomcolor = data.bottomcolor || 'white'
        data.questionfont = data.questionfont || 'sans-serif'
        data.answerfont = data.answerfont || 'sans-serif'

        res.render('answer', {words: data})
      } else {
        res.render('answer', {words: data})
      }
    })
  },

  saveQA (req, res) {
    Question.create(req.body, (err, data) => {
      if (err) throw err;
      res.redirect(`/${data.url}`)
    })
  },

  form (req, res) {
    res.render('form')
  }
}

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
        // const defaultPres = {
        //   questioncolor: 'black',

        // }

        data.questioncolor === undefined ? data.questioncolor =  'black' : data.questioncolor = data.questioncolor
        data.answercolor === undefined ? data.answercolor =  'black' : data.answercolor = data.answercolor
        data.topcolor === undefined ? data.topcolor =  'white' : data.topcolor = data.topcolor
        data.bottomcolor === undefined ? data.bottomcolor =  'white' : data.bottomcolor = data.bottomcolor
        data.questionfont === undefined ? data.questionfont =  'sans-serif' : data.questionfont = data.questionfont
        data.answerfont === undefined ? data.answerfont =  'sans-serif' : data.answerfont = data.answerfont
        // data.answerfont = data.answerfont || 'sans-serif'
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

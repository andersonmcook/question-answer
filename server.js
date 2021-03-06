'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Question = require('./models/qa.model')
const answer = require('./controllers/qa.controller')
const PORT = process.env.PORT || 3000

const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost'
const MONGODB_PORT = process.env.MONGODB_PORT || 27017
const MONGODB_USER = process.env.MONGODB_USER || ''
const MONGODB_PASS = process.env.MONGODB_PASS || ''
const MONGODB_DB = 'questionasker';
const MONGODB_URL_PREFIX = MONGODB_USER ? `${MONGODB_USER}:${MONGODB_PASS}@` : ''

const MONGODB_URL = `mongodb://${MONGODB_URL_PREFIX}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`

app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'))

// options
app.locals.options = {
  qPlace: "Write a question with an obvious answer.",
  aPlace: "Obvious Answer",
  fonts: ['sans-serif', 'serif', 'monospace', 'fantasy', 'cursive']
}

// form
app.get('/', answer.form)

// save qa
app.post('/question', answer.saveQA)

// controller for rendering answer
app.get('/:question', answer.renderAnswer)

//
// connect
mongoose.connect(MONGODB_URL, (err) => {
  if (err) throw err;
  // listen
  app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
  });

});

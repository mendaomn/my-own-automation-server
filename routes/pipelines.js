const express = require('express')
const db = require('../utils/db')

const app = express()

app.get('/', (req, res) => {
  const pipelines = db.getAll()
  res.status(200).send(pipelines)
})

app.post('/', (req, res) => {
  const obj = {
    name: req.body.name,
    file: req.body.file
  }

  const insertedObj = db.store(obj)

  res.status(200).send(insertedObj)
})

module.exports = app
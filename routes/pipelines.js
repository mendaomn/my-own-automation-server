const express = require('express')
const { create } = require('../utils/db')

const app = express()
const db = create()

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
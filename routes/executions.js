const express = require('express')
const { create } = require('../utils/db')

const app = express()
const db = create()

app.get('/', (req, res) => {
  if (req.query.id) {
    const execution = db.find(req.query.id)
    res.status(200).send(execution)
  } else {
    const executions = db.getAll()
    res.status(200).send(executions)
  }
})

app.post('/', (req, res) => {
  const obj = {
    name: req.body.name
  }

  const insertedObj = db.store(obj)

  res.status(200).send(insertedObj)
})

module.exports = app
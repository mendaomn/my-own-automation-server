const { create } = require('../utils/db')

const db = create('pipelines')

function get(req, res) {
  const pipelines = db.getAll()
  res.status(200).send(pipelines)
}

function post(req, res) {
  const obj = {
    name: req.body.name,
    file: req.body.file
  }

  const insertedObj = db.store(obj)

  res.status(200).send(insertedObj)
}

module.exports = {
  get,
  post
}
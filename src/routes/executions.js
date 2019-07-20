const { create, getByName, ...dbUtility } = require('../utils/db')
const { run } = require('../utils/make')

const db = create('executions')

function get(req, res) {
  if (req.query.id) {
    const execution = db.find(req.query.id)
    res.status(200).send(execution)
  } else {
    const executions = db.getAll()
    res.status(200).send(executions)
  }
}

function post(req, res) {
  const obj = {
    name: req.body.name
  }

  const insertedObj = db.store(obj)

  const pipelinesDb = getByName('pipelines')

  const pipeline = pipelinesDb.getAll()
    .find(pipeline => pipeline.name === insertedObj.name)

  run(pipeline.file)

  res.status(200).send(insertedObj)
}

module.exports = {
  get,
  post
}
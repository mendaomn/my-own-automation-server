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

async function post(req, res) {
  const obj = {
    name: req.body.name,
    timestamp: new Date().toISOString()
  }

  const pipelinesDb = getByName('pipelines')

  const pipeline = pipelinesDb.getAll()
    .find(pipeline => pipeline.name === obj.name)

  const retVal = await run(pipeline.file)
  const insertedObj = db.store({
    ...obj,
    info: retVal
  })

  res.status(200).send(insertedObj)
}

module.exports = {
  get,
  post
}
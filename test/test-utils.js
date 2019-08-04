const fs = require('fs')
const path = require('path')

const { create } = require('../src/server/utils/db')

function getSuccessMakefile() {
  const SUCCESS_MAKEFILE_PATH = path.join(__dirname, 'Makefile-success')

  return fs.readFileSync(SUCCESS_MAKEFILE_PATH)
}

function getFailureMakefile() {
  const FAILURE_MAKEFILE_PATH = path.join(__dirname, 'Makefile-failure')

  return fs.readFileSync(FAILURE_MAKEFILE_PATH)
}

function initPipelinesDB() {
  const db = create('pipelines')
  db.flush()
  db.store({
    name: 'staging-pipeline',
    file: getSuccessMakefile()
  })

  return db
}

function initExecutionsDB() {
  const db = create('executions')
  db.flush()
  db.store({
    name: 'staging-pipeline'
  })

  return db
}

module.exports = {
  initPipelinesDB,
  initExecutionsDB,
  getSuccessMakefile,
  getFailureMakefile
}
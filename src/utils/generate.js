const fs = require('fs')
const path = require('path')

function id(a){
  return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,id)
}

function successMakefile() {
  const SUCCESS_MAKEFILE_PATH = path.join(__dirname, 'Makefile-success')

  return fs.readFileSync(SUCCESS_MAKEFILE_PATH)
}

function failureMakefile() {
  const FAILURE_MAKEFILE_PATH = path.join(__dirname, 'Makefile-failure')

  return fs.readFileSync(FAILURE_MAKEFILE_PATH)
}

module.exports = {
  id,
  successMakefile,
  failureMakefile
}
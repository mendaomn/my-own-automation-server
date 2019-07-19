const fs = require('fs')
const path = require('path')
const {execSync} = require('child_process')

const generate = require('./generate')


async function run(fileContent) {
  const TMP_FILE_LOCATION = path.join(__dirname, `Makefile-${generate.id()}`)
  fs.writeFileSync(TMP_FILE_LOCATION, fileContent)
  try {
    const stdout = execSync(`make -f ${TMP_FILE_LOCATION}`)
    return { exitCode: 0, stdout: stdout.toString() }
  } catch (error) {
    return { exitCode: 1, stderr: error.stderr.toString() }
  } finally {
    fs.unlinkSync(TMP_FILE_LOCATION)
  }
}

module.exports = {
  run
}
const express = require('express')
const app = express()

app.get('/pipelines', require('./pipelines').get)
app.post('/pipelines', require('./pipelines').post)

app.get('/executions', require('./executions').get)
app.post('/executions', require('./executions').post)

module.exports = app
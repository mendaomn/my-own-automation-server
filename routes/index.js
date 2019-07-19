const express = require('express')
const app = express()

app.get('/pipelines', require('./routes/pipelines').get)
app.post('/pipelines', require('./routes/pipelines').post)

app.get('/executions', require('./routes/executions').get)
app.post('/executions', require('./routes/executions').post)

module.exports = app
const express = require('express')

const app = express()
const PORT = 8888

const onServerStart = () => console.log(`Server listening on ${PORT}`)

app.use(express.json())
app.use('/pipelines', require('./routes/pipelines'))
app.use('/executions', require('./routes/executions'))

app.listen(PORT, onServerStart)
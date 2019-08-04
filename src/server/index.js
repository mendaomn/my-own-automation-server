const express = require('express')

const app = express()
const PORT = 8888

const onServerStart = () => console.log(`Server listening on ${PORT}`)

app.use(express.json())

app.use('/', require('./routes'))

const server = app.listen(PORT, onServerStart)

module.exports = server
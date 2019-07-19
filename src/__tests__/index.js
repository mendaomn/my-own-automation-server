const axios = require('axios')

let api, server

beforeAll(() => {
  server = require('../index.js')
  const baseURL = `http://localhost:${server.address().port}`
  api = axios.create({baseURL})
})

afterAll(() => {
  server.close()
})

test('should expose GET and POST /pipelines endpoints', async () => {
  const getResponse = await axios.get('http://localhost:8888/pipelines')
  const postResponse = await axios.post('http://localhost:8888/pipelines')
  
  expect(getResponse.status).toBe(200)
  expect(postResponse.status).toBe(200)
});

test('should expose GET and POST /executions endpoints', async () => {
  const getResponse = await axios.get('http://localhost:8888/executions')
  const postResponse = await axios.post('http://localhost:8888/executions')
  
  expect(getResponse.status).toBe(200)
  expect(postResponse.status).toBe(200)
});

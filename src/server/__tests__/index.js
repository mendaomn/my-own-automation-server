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
  const getResponse = await api.get('/pipelines')
  const postResponse = await api.post('/pipelines')
  
  expect(getResponse.status).toBe(200)
  expect(postResponse.status).toBe(200)
});

test('should expose GET and POST /executions endpoints', async () => {
  const getResponse = await api.get('/executions')
  const postResponse = await api.post('/executions')
  
  expect(getResponse.status).toBe(200)
  expect(postResponse.status).toBe(200)
});

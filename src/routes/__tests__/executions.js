const { initPipelinesDB, initExecutionsDB } = require('test-utils')

const {get, post} = require('../executions')
const make = require('../../utils/make')

jest.mock('../../utils/generate')
jest.mock('../../utils/make')

const setup = () => {
  const setupObject = {
    req: {},
    res: {
      status: jest.fn(() => setupObject.res),
      send: jest.fn()
    },
    pipelines: initPipelinesDB(),
    executions: initExecutionsDB()
  }
  return setupObject
}

beforeEach(() => {
  jest.resetAllMocks()
})

test('should allow GET method', () => {
  const {req, res} = setup()
  req.query = {}
  get(req, res)

  expect(res.status).toHaveBeenCalledTimes(1)
  expect(res.status).toHaveBeenCalledWith(200)
  expect(res.send).toHaveBeenCalledTimes(1)
  expect(res.send).toHaveBeenCalledWith([{
    name: 'staging-pipeline',
    _id: 'uuid'
  }])
  
  const {req: getWithFilterReq, res: getWithFilterRes} = setup()
  getWithFilterReq.query = { id: 'uuid' }
  get(getWithFilterReq, getWithFilterRes)

  expect(getWithFilterRes.status).toHaveBeenCalledTimes(1)
  expect(getWithFilterRes.status).toHaveBeenCalledWith(200)
  expect(getWithFilterRes.send).toHaveBeenCalledTimes(1)
  expect(getWithFilterRes.send).toHaveBeenCalledWith({
    name: 'staging-pipeline', 
    _id: 'uuid'
  })
});

test('should allow POST method', () => {
  const {req, res} = setup()
  const fakePipeline = { name: 'staging-pipeline' }
  req.body = fakePipeline

  post(req, res)
  
  expect(res.status).toHaveBeenCalledTimes(1)
  expect(res.status).toHaveBeenCalledWith(200)
  expect(res.send).toHaveBeenCalledTimes(1)
  expect(res.send).toHaveBeenCalledWith(expect.objectContaining(fakePipeline))
});

test('should run pipeline by name', () => {
  const {req, res, pipelines: db} = setup()

  const fakePipeline = {
    name: 'staging-pipeline'
  }
  req.body = fakePipeline
  post(req, res)

  expect(make.run).toHaveBeenCalledTimes(1)
  expect(make.run).toHaveBeenCalledWith(db.getAll()[0].file)
});
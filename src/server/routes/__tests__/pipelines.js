const {get, post} = require('../pipelines')

const setup = () => {
  const setupObject = {
    req: {},
    res: {
      status: jest.fn(() => setupObject.res),
      send: jest.fn()
    }
  }
  return setupObject
}

test('should allow GET method', () => {
  const {req, res} = setup()
  const fakePipeline = {
    name: 'my fake pipeline',
    file: 'veryblob'
  }
  req.body = fakePipeline

  post(req, res)  

  const {req: getReq, res: getRes} = setup()
  get(getReq, getRes)

  expect(getRes.status).toHaveBeenCalledTimes(1)
  expect(getRes.status).toHaveBeenCalledWith(200)
  expect(getRes.send).toHaveBeenCalledTimes(1)
  expect(getRes.send).toHaveBeenCalledWith([expect.objectContaining(fakePipeline)])
});

test('should allow POST method', () => {
  const {req, res} = setup()
  const fakePipeline = {
    name: 'my fake pipeline',
    file: 'veryblob'
  }
  req.body = fakePipeline

  post(req, res)
  
  expect(res.status).toHaveBeenCalledTimes(1)
  expect(res.status).toHaveBeenCalledWith(200)
  expect(res.send).toHaveBeenCalledTimes(1)
  expect(res.send).toHaveBeenCalledWith(expect.objectContaining(fakePipeline))
});
const uniq = require('lodash.uniq')

const generate = require('../generate')

test('should generate different ids every time', () => {
  let uuids = []

  for (let i = 0; i < 100; i++) {
    uuids.push(generate.id())
  }

  expect(uuids).toEqual(uniq(uuids))
});
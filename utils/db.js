const generate = require('./generate')

module.exports = {
  
  __db: {},

  store(obj) {
    const uuid = generate.id()

    const objWithId = {
      ...obj,
      _id: uuid
    }

    this.__db[uuid] = objWithId

    return objWithId
  },

  find(uuid) {
    return this.__db[uuid]
  },

  getAll() {
    return Array.from(Object.values(this.__db))
  }
}
const generate = require('./generate')

const dbList = {}

const db = () => ({
  
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
  },

  flush() {
    this.__db = {}
  }

})

module.exports = {

  create(dbName) {
    const newDB = dbList[dbName] || db()

    dbList[dbName] = newDB

    return newDB
  },

  list() {
    return dbList
  },

  getByName(dbName) {
    return dbList[dbName]
  }
  
}
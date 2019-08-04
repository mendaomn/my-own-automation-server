function id(){
  return "_" + Math.random().toString(32).substr(2, 9)
}

module.exports = {
  id
}
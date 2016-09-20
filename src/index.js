const svenskaakademien = require('./lib/svenskaakademien.js')
const alltforforaldrar = require('./lib/alltforforaldrar.js')

module.exports = {}

Promise.all([svenskaakademien(), alltforforaldrar()])
  .then(values => console.log(values))

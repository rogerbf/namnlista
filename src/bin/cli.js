#!/usr/bin/env node

const nameday = require('../index.js')
const cache = require('./cache.js')

cache.get()
  .then(
    names => names,
    err => nameday.today()
  )
  .then(names => cache.set(names))
  .then(names => {
    process.stdout.write(`Dagens namn: ${names.main.join(`, `)}\n`)
    if (names.hasOwnProperty(`alternate`)) {
      process.stdout.write(`Alternativt: ${names.alternate.join(`, `)}\n`)
    }
  })
  .catch(err => process.stdout.write(`Kunde inte hämta dagens namn\n`))

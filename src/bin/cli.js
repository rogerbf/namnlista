#!/usr/bin/env node

const nameday = require('../index.js')
const cache = require('./nameCache.js')

cache.get()
  .then(
    names => names,
    err => nameday.today()
  )
  .then(names => cache.set(names))
  .then(names => {
    process.stdout.write(`Todays names: ${names.main.join(`, `)}`)
    if (names.hasOwnProperty(`alternate`)) {
      process.stdout.write(` alternate: ${names.alternate.join(`, `)}`)
    }
    process.stdout.write(`\n`)
  })
  .catch(err => process.stdout.write(`Todays names: Could not get names, error: ${err}\n`))

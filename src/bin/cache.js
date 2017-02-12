const fs = require('fs')
const path = require('path')

const getMonthDate = () => {
  const date = new Date(Date.now())
  return `${date.getMonth() + 1}_${date.getDate()}`
}

const getYear = () => {
  return new Date(Date.now()).getFullYear()
}

const get = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, `cache-${getMonthDate()}.json`), (err, data) => {
      if (err) {
        reject('not in cache')
      }
      else {
        const parsed = JSON.parse(data)
        parsed.year < getYear() ? reject('stale data') : resolve(parsed.payload)
      }
    })
  })
}

const set = payload => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.join(__dirname, `cache-${getMonthDate()}.json`),
      JSON.stringify(Object.assign({}, { payload }, { year: getYear() })),
      (err) => err ? reject(err) : resolve(payload)
    )
  })
}

module.exports = {
  get,
  set
}

const xray = require(`./xray.js`)

const url = `http://svenskanamn.alltforforaldrar.se/namnsdag`

const scrape = xray(url, `.nameday-today`, ['a | trim'])

module.exports = () =>
  new Promise((resolve, reject) => {
    scrape((err, names) => {
      if (err) reject(err)
      resolve({ site: `alltforforaldrar_se`, main: names })
    })
  })

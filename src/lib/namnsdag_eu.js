const xray = require(`./xray.js`)

const url = `http://www.namnsdag.eu/`

const scrape = xray(url, {
  main: xray([`.centered_h1 a`])
})

module.exports = () => new Promise((resolve, reject) => {
  scrape((err, names) => {
    if (err) reject(err)
    resolve(names)
  })
})

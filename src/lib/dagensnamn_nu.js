const xray = require(`./xray.js`)

const url = `http://www.dagensnamn.nu/`

const scrape = xray(url, `h1 | trim`)

module.exports = () =>
  new Promise((resolve, reject) => {
    scrape((err, names) => {
      if (err) reject(err)
      resolve({ site: `dagensnamn_nu` ,main: names.split(`, `) })
    })
  })

const xray = require(`./xray.js`)

const url = `http://www.namnsdag.nu/`

const scrape = xray(url, {
  main: xray(`.main-names span`),
  alternative: xray(`.additional-names-row dd`)
})

const splitFilterTrim = name =>
  name.split(`,`).filter(n => n.length > 0).map(n => n.trim())

module.exports = () => new Promise((resolve, reject) => {
  scrape((err, names) => {
    if (err) reject(err)
    resolve({
      main: splitFilterTrim(names.main),
      alternative: splitFilterTrim(names.alternative)
    })
  })
})

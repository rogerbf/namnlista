const xray = require(`./xray.js`)

const url = `http://www.svenskaakademien.se/`

const scrape = xray(url, `.view-name-day`, {
  main: xray(`.name_day__main-name`, [`.name_day__name | trim`]),
  alternate: xray(`.name_day__not-main-name`, [`.name_day__name | trim`])
})

module.exports = () =>
  new Promise((resolve, reject) => {
    scrape((err, names) => {
      if (err) reject(err)
      resolve(names)
    })
  })

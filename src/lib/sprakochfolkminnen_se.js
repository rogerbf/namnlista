const xray = require(`./xray.js`)

const url = `http://www.sprakochfolkminnen.se/sprak/namn/personnamn/dagens-namn-i-almanackan.html`

const scrape = xray(url, [`.subheading span`])

module.exports = () =>
  new Promise((resolve, reject) => {
    scrape((err, names) => {
      if (err) reject(err)
      resolve({ main: names })
    })
  })

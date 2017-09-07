import xray from "./xray"

const url = `http://www.sprakochfolkminnen.se/sprak/namn/personnamn/dagens-namn-i-almanackan.html`

const scrape = xray(url, [ `.subheading span` ])

export default () =>
  new Promise((resolve, reject) => {
    scrape((err, names) => {
      if (err) reject(err)
      resolve({ site: `sprakochfolkminnen_se`, main: names })
    })
  })

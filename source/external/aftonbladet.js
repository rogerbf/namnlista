import xray from "./xray"

const url = `http://www.aftonbladet.se/dagensnamn/`

const scrape = xray(url, [ `#abMainColumn h2` ])

export default () =>
  new Promise((resolve, reject) => {
    scrape((err, names) => {
      if (err) reject(err)
      resolve({ site: `aftonbladet_se`, main: names })
    })
  })

import xray from "./xray"

const url = `http://svenskanamn.alltforforaldrar.se/namnsdag`

const scrape = xray(url, `.nameday-today`, [ `a | trim` ])

export default () =>
  new Promise((resolve, reject) => {
    scrape((err, names) => {
      if (err) reject(err)
      resolve({ source: `alltforforaldrar.se`, included: names })
    })
  })

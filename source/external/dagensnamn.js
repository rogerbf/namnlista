import xray from "./xray"

const url = `http://www.dagensnamn.nu/`

const scrape = xray(url, `h1 | trim`)

export default () =>
  new Promise((resolve, reject) => {
    scrape((err, names) => {
      if (err) reject(err)
      resolve({ source: `dagensnamn.nu`, included: names.split(`, `) })
    })
  })

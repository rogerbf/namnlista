import xray from "./xray"

const url = `http://www.namnsdag.eu/`

const scrape = xray(url, {
  included: xray([ `.centered_h1 a` ])
})

export default () =>
  new Promise((resolve, reject) => {
    scrape((err, { included }) => {
      if (err) reject(err)
      resolve({ source: `namnsdag.eu`, included })
    })
  })

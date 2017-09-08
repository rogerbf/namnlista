import xray from "../xray"

const url = `http://www.namnsdag.nu/`

const scrape = xray(url, {
  main: xray(`.main-names span`),
  alternate: xray(`.additional-names-row dd`)
})

const splitFilterTrim = name =>
  name
    .split(`,`)
    .filter(n => n.length > 0)
    .map(n => n.trim())

export default () =>
  new Promise((resolve, reject) => {
    scrape((err, names) => {
      if (err) reject(err)
      resolve({
        source: `namnsdag.nu`,
        included: splitFilterTrim(names.main),
        alternate: splitFilterTrim(names.alternate)
      })
    })
  })

import xray from "./xray"

const url = `http://www.dagensnamnsdag.nu/`

const scrape = xray(url, `h1 + p | trim`)

export default () =>
  new Promise((resolve, reject) => {
    scrape((err, names) => {
      if (err) reject(err)
      resolve(
        names.split(`\n`).reduce((acc, el) => {
          const name = el.trim()
          // match non empty
          if (/\w/.test(name)) {
            // last char is non-word
            if (/\W/.test(name.slice(-1))) {
              return Object.assign({}, acc, {
                alternate: [ ...acc.alternate, name.slice(0, -1) ]
              })
            } else {
              return Object.assign({}, acc, {
                included: [ ...acc.included, name ]
              })
            }
          } else {
            return acc
          }
        }, { source: `dagensnamnsdag.nu`, included: [], alternate: [] })
      )
    })
  })

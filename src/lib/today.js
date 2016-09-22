const sites = require(`./sites.js`)

const takeThreeRandom = (arr, count = 3 , results = []) => {
  if (results.length < count) {
    const selected = arr[Math.ceil(Math.random() * arr.length) - 1]
    return takeThreeRandom(
      arr.filter(fn => fn !== selected),
      count,
      results.concat(selected)
    )
  } else { return results }
}

const combineResults = arr => {
  return arr.reduce((acc, curr) => {
    if (curr.hasOwnProperty(`main`)) {
      curr.main.map(name => {
        if (!acc.main.includes(name)) {
          Object.assign(acc, { main: [...acc.main, name ]})
        }
      })
    }
    if (curr.hasOwnProperty(`alternate`)) {
      curr.alternate.map(name => {
        if (!acc.alternate.includes(name)) {
          Object.assign(acc, { alternate: [...acc.alternate, name ]})
        }
      })
    }
    return acc
  }, { main: [], alternate: [] })
}

module.exports = () => new Promise((resolve, reject) => {
  let retries = 0
  const fire = () => {
    const promises = takeThreeRandom(Object.keys(sites))
      .map(site => sites[site]())
    Promise.all(promises)
      .then(results => resolve(combineResults(results)))
      .catch(e => {
        if (retries < 3) {
          retries++
          fire()
        } else { reject(`could not get names`)}
      })
  }
  fire()
})

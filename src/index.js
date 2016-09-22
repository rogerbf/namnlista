const sites = require(`./lib/sites.js`)

module.exports = {
  today: () => {},
  all: () => {}
}

sites.svenskaakademien_se().then(r => console.log(r))

// Promise.all(Object.keys(sites).map(site => sites[site]()))
//   .then(r => console.log(r))

const sites = {
  svenskaakademien_se: require(`./lib/svenskaakademien_se.js`),
  alltforforaldrar_se: require(`./lib/alltforforaldrar_se.js`),
  dagensnamn_nu: require(`./lib/dagensnamn_nu.js`),
  dagensnamnsdag_nu: require(`./lib/dagensnamnsdag_nu.js`),
  namnsdag_nu: require(`./lib/namnsdag_nu.js`),
  namnsdag_eu: require(`./lib/namnsdag_eu.js`)
}

module.exports = {
  today: () => {},
  all: () => {}
}

sites.namnsdag_eu().then(r => console.log(r))

// Promise.all(Object.keys(sites).map(site => sites[site]()))
//   .then(r => console.log(r))

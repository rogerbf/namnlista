const akademien = require(`akademien`).nameday.today

module.exports = () => akademien()
  .then(names => Promise.resolve(
    Object.assign({}, { site: `svenskaakademien_se` }, names)
  )
)

const filters = {
  trim: (value) => {
    return typeof value === `string` ? value.trim() : value
  }
}

module.exports = require(`x-ray`)({ filters })

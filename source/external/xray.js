import xray from "x-ray"

const filters = {
  trim: value => {
    return typeof value === `string` ? value.trim() : value
  }
}

export default xray({ filters })

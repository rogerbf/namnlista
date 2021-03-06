import akademien from "akademien"
import * as external from "./external/external"

export default Object.assign(input => akademien.namedays.lookup(input), {
  all: akademien.namedays.names,
  external
})

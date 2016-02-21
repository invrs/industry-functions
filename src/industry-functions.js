import { protoToFunctions } from "./proto"

export let functions = Class =>
  class extends Class {
    functions() {
      let proto = this.constructor.prototype
      let names = protoToFunctions(proto)
      let fns = new Map()

      names.forEach(name => {
        fns.set(name, this[name])
      })

      return fns
    }
  }

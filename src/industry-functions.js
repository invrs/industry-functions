import { protoToMap } from "./proto"

export let functions = Class =>
  class extends Class {
    functions() {
      return protoToMap.bind(this)(this)
    }

    static functions() {
      return protoToMap.bind(this)(this)
    }
  }

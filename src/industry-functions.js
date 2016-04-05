import { protoToObject } from "./proto"

export let functions = Class =>
  class extends Class {
    functions() {
      return protoToObject.bind(this)(this)
    }

    static functions() {
      return protoToObject.bind(this)(this)
    }
  }

import { protoToObject } from "./proto"

export let functions = Class =>
  class extends Class {
    static beforeFactoryOnce() {
      this.industry({
        ignore: {
          Class: [ "functions" ],
          instance: [ "functions" ]
        }
      })
    }

    functions() {
      return protoToObject.bind(this)(this, this.industry().ignore.instance)
    }

    static functions() {
      return protoToObject.bind(this)(this, this.industry().ignore.Class)
    }
  }

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
      super.beforeFactoryOnce()
    }

    functions() {
      return protoToObject.bind(this)(this, this.Class.industry().ignore.instance)
    }

    static functions() {
      return protoToObject.bind(this)(this, this.industry().ignore.Class)
    }
  }

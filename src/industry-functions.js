import { protoToObject } from "./proto"

let cache = {
  Class: {},
  instance: {}
}

function cacheFunctions({ ignore, type }) {
  let c = cache[type]
  if (c[this.Class]) {
    return c[this.Class]
  } else {
    c[this.Class] = 
      protoToObject.bind(this)(this, ignore[type])
    return c[this.Class]
  }
}

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
      return cacheFunctions.bind(this)({
        ignore: this.Class.industry().ignore,
        type: "instance"
      })
    }

    static functions() {
      return cacheFunctions.bind(this)({
        ignore: this.industry().ignore,
        type: "Class"
      })
    }
  }

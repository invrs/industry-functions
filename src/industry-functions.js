import { protoToObject } from "./proto"

let cache = {
  Class: {},
  instance: {}
}

function cacheFunctions({ id, ignore, type }) {
  let c = cache[type]
  if (c[id]) {
    return c[id]
  } else {
    c[id] = protoToObject.bind(this)(this, ignore[type])
    return c[id]
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
        id: this.Class.industry().id,
        ignore: this.Class.industry().ignore,
        type: "instance"
      })
    }

    static functions() {
      return cacheFunctions.bind(this)({
        id: this.industry().id,
        ignore: this.industry().ignore,
        type: "Class"
      })
    }
  }

export let ignore = [
  "apply",
  "arguments",
  "bind",
  "call",
  "caller",
  "toString"
]

export function protoToObject(proto) {
  let fns = {}
  let names = protoToNames(proto)

  names.forEach(name => {
    fns[name] = this[name]
  })

  return fns
}

export function protoToNames(proto) {
  if (proto && proto.__proto__) {
    return Object
      .getOwnPropertyNames(proto)
      .filter(name => {
        if (ignore.indexOf(name) == -1) {
          return (typeof proto[name] == "function")
        }
      })
      .concat(protoToNames(proto.__proto__))
  } else {
    return []
  }
}

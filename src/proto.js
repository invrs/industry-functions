export let ignore_props = [
  "apply",
  "arguments",
  "bind",
  "call",
  "caller",
  "toString"
]

export function protoToObject(proto, ignore) {
  let fns = {}
  let names = protoToNames(proto, ignore.concat(ignore_props))

  names.forEach(name => {
    fns[name] = this[name]
  })

  return fns
}

export function protoToNames(proto, ignore) {
  if (proto && proto.__proto__) {
    return Object
      .getOwnPropertyNames(proto)
      .filter(name => {
        if (ignore.indexOf(name) == -1) {
          return (typeof proto[name] == "function")
        }
      })
      .concat(protoToNames(proto.__proto__, ignore))
  } else {
    return []
  }
}

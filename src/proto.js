export function protoToFunctions(proto) {
  if (proto && proto.__proto__) {
    return Object
      .getOwnPropertyNames(proto)
      .filter(name => typeof proto[name] == "function")
      .concat(protoToFunctions(proto.__proto__))
  } else {
    return []
  }
}

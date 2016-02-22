import { factory } from "industry"
import { factory_instance } from "industry-factory-instance"
import { functions } from "../../"

describe("functions", () => {
  let test

  function makeTest() {
    return factory()
      .set("factory_instance", factory_instance)
      .set("functions", functions)
      .base(class {
        hello() {}
        static world() {}
      })
  }

  beforeEach(() => {
    test = makeTest()
  })

  describe("instance methods", () => {
    it("returns the proper keys", () => {
      expect([...test().functions().keys()]).toEqual(
        [ "constructor", "functions", "hello" ]
      )
    })

    it("returns the proper values", () => {
      let fns = test().functions()
      expect(fns.get("hello")).toEqual(jasmine.any(Function))
    })
  })

  describe("class methods", () => {
    it("returns the proper keys", () => {
      expect([...test().constructor.functions().keys()]).toEqual(
        [ "functions", "factory", "world", "constructor" ]
      )
    })

    it("returns the proper values", () => {
      let fns = test().constructor.functions()
      expect(fns.get("world")).toEqual(jasmine.any(Function))
    })
  })
})

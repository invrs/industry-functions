import { factory } from "industry"
import { instance } from "industry-instance"
import { functions } from "../../"

describe("functions", () => {
  let test

  function makeTest() {
    return factory()
      .set("instance", instance)
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
      expect(Object.keys(test().functions())).toEqual([ "hello" ])
    })

    it("returns the proper values", () => {
      let fns = test().functions()
      expect(fns.hello).toEqual(jasmine.any(Function))
    })
  })

  describe("class methods", () => {
    it("returns the proper keys", () => {
      expect(Object.keys(test().constructor.functions())).toEqual([ "world" ])
    })

    it("returns the proper values", () => {
      let fns = test().constructor.functions()
      expect(fns.world).toEqual(jasmine.any(Function))
    })
  })
})

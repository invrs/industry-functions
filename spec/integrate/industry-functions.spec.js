import { factory } from "industry"
import { factory_instance } from "industry-factory-instance"
import { functions } from "../../"

describe("functions", () => {
  let test

  function makeTest() {
    return factory()
      .set("factory_instance", factory_instance)
      .set("functions", functions)
      .base(class { hello() {} })
  }

  beforeEach(() => {
    test = makeTest()
  })

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

# IndustryFunctions [![Build Status](https://travis-ci.org/invrs/industry-functions.svg?branch=master)](https://travis-ci.org/invrs/industry-functions)

Retrieve factory instance and class methods.

## Usage

```js
import { factory } from "industry"
import { instance } from "industry-instance"
import { functions } from "industry-functions"

class Test {
  hello() {}
  static world() {}
}

let test = factory(Test)
  .set("instance", instance)
  .set("functions", functions)

test().functions()             // { 'hello' => [Function: hello] }
test().constructor.functions() // { 'world' => [Function: world] }
```

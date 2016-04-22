# IndustryFunctions [![Build Status](https://travis-ci.org/invrs/industry-functions.svg?branch=master)](https://travis-ci.org/invrs/industry-functions)

Retrieve factory instance and class methods.

## Usage

```js
import { factory } from "industry"
import { instance } from "industry-instance"
import { functions } from "industry-functions"

let test = factory()
  .set("instance", instance)
  .set("functions", functions)

test = test(class {
  hello() {}
  static world() {}
})

test().functions()             // { 'hello' => [Function: hello] }
test().constructor.functions() // { 'world' => [Function: world] }
```

# IndustryFunctions [![Build Status](https://travis-ci.org/invrs/industry-functions.svg?branch=master)](https://travis-ci.org/invrs/industry-functions)

Adds a `functions` method to [Industry](https://github.com/invrs/industry) factory instances that returns all instance and class functions.

## Usage

```js
import { factory } from "industry"
import { factory_instance } from "industry-factory-instance"
import { functions } from "industry-functions"

let test factory()
  .set("factory_instance", factory_instance)
  .set("functions", functions)
  .base(class {
    hello() {}
    static world() {}
  })

test().functions()             // Map { 'hello' => [Function: hello] }
test().constructor.functions() // Map { 'world' => [Function: world] }
```

# is-subclass-of

Returns true if A is a subclass of B.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i is-subclass-of
```

## API

The module exports a single function.

### Parameters

1. Bindable: `A` (function): What may or may not be a subclass of B.
2. `B` (function or string): What may or may not be an ancestor of A. You can either provide the class itself or its string name.

### Return Value

* Returns `true` if `A` is a subclass of `B`.
* Otherwise `false`.

## Example

```javascript
const isSubclassOf = require('is-subclass-of')

isSubclassOf(Date, Error) // false
isSubclassOf(Error, Error) // false

isSubclassOf(TypeError, Error) // true
isSubclassOf(RangeError, Error) // true
isSubclassOf(RangeError, 'Error') // true

class A {}
class B extends A {}
isSubclassOf(A, A) // false
isSubclassOf(B, A) // true
isSubclassOf(B, 'A') // true

// Supports the bind operator
TypeError::isSubclassOf(Error) // true
TypeError::isSubclassOf('Error') // true
B::isSubclassOf(A) // true
```

## Related

* [is-class-of](https://github.com/lamansky/is-class-of): Returns true if A is a subclass of B or the same class as B.
* [is-instance-of](https://github.com/lamansky/is-instance-of): Like `instanceof`, but uses class name strings.

# Javascript
Practice for Javascript or ES6

Currently In the Works:
## Async vs Sync
Testing if resolving a huge for-loop asyncronously vs completing a huge for-loop without asyncronous operations, which is faster?
* Complete: It's faster by 10%!? ~Run a long operation (Math.random(), ONE_BILLION times) in 2 for-loops without a promise. Then do it with a promise. Compare times.~
* Verify Nonsensical Results with other tests.

## Math Operations with Number Strings
What operations work on strings which contain numbers?
* Complete: Only addition needs to be parseFloat ~Test basic math operations (+-*/)~ 
* Test Modulus (%).
* Test Math Library operations (Math.floor, Math.round, Math.sqrt, etc).

## Object Property Creation
Are properties in objects created if they're not set? Testing if `obj['testkey']` and `console.log(obj)` will output the `'testkey'` key.
* Complete: Just writing the key doesn't do anything, it needs to be set. ~Make an object and write an key. THen write a new key and set it. Then write a new key and set it to `undefined`.~
* Check if it's in `Object.keys(obj)`. 

## Bind Function Call
Consider `fx.bind(this, a, b)(INFO)`, where does `INFO` go?
* Write a bind function and find the information in the `INFO` portion. 

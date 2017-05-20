# Javascript
Practice for Javascript or ES6

Currently In the Works:
## Async vs Sync
Testing if resolving a huge for-loop asyncronously vs completing a huge for-loop without asyncronous operations, which is faster?
* Complete: It's faster by 10%!? ~Run a long operation (Math.random(), ONE_BILLION times) in 2 for-loops without a promise. Then do it with a promise. Compare times.~
* Verify Nonsensical Results with other tests.
* Try out Async / Await.

## Math Operations with Number Strings
What operations work on strings which contain numbers?
* Complete: Only addition needs to be parseFloat ~Test basic math operations (+-*/)~ 
* Complete: Modulus works. ~Test Modulus (%).~
* Complete: Math square root works. ~Test Math Library operations (Math.floor, Math.round, Math.sqrt, etc).~

## Object Property Creation
Are properties in objects created if they're not set? Testing if `obj['testkey']` and `console.log(obj)` will output the `'testkey'` key.
* Complete: Just writing the key doesn't do anything, it needs to be set. ~Make an object and write an key. THen write a new key and set it. Then write a new key and set it to `undefined`.~
* Check if it's in `Object.keys(obj)`. 

## Bind Function Call
Consider `fx.bind(this, a, b)(INFO)`, where does `INFO` go?
* Complete: Found that `INFO` will just take the place of the third paramter. So parameter order matters, the last ones should be the ones you can fill in later. Is there a way to fill it out of order? I don't think so, I could be wrong. ~Write a bind function and find the information in the `INFO` portion.~

## Too Many IDs
I commonly use CSS files where if you switch the order of the classes, everything explodes. It's infuriating. 

Some consider putting IDs on everything bad practice, I call it consistency. Here, I explore the downsides of adding a lot of IDs and seeing how it affects render time and traversing time. Does clouding up the DOM Namespace affect performance that much?
* See render time and traversing time for 10 IDs, 10 classes, 10 unique tags and compare it to traversing time for 10,000 IDs
* See render time and traversing time for 1 million IDs (If it even allows me to open it?)

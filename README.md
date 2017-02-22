# Assignment - Await/Async

> Using the async/await pattern to control parallelism

[![Build Status](https://travis-ci.org/helio-training/fs-corejs-asyncronous-async-await.svg?branch=solutions)](https://travis-ci.org/helio-training/fs-corejs-asyncronous-async-await)

## Introduction

The last evolution of the asynchronous code is to use the async/await pattern.  By decorating a function with the `async` keyword we are effectively telling JavaScript that our function in simplistic terms will return a promise.  To use the `async` keyword simply place it before the function definition.

When a function is decorated with the `async` keyword, at least one `await` keyword must be used.  Notice in the code below that the await keyword is use before the  `values.reduce()`
  
```js
const add = async (...values) => await values.reduce((prev, current) => prev + current, 0);

const result = add(1,2,3); // 6
```

### The things we can `await`

The most exciting part about the `async/await` pattern is the simplicity at which we can incorporate the pattern.  Almost any function can turn convert into an `async` one, and the `await` keyword can be used on a Promise or value.  Meaning, we can literally await anything. 
 
When the `await` is encountered and the thing that it's waiting for is not a promise, `await` will wrap it in a promise, and you can think of the code implementation to look like similar to `Promise.resolve(value)`.

### When should we use `async/await`?

The usual answer to these questions is '... it depends', and it really does depend on what you are doing.  I've taken the slightly more aggressive  mentality of applying `async` to just about everything that makes sense.  I honestly, use it all over the place.
  
I like the pattern because it turns asynchronous code into code that appears synchronous.

## Assignment

For this assignment we will be creating a client for the [Clash Royal API](https://github.com/martincarrera/clash-royale-api).  Use any library to do requests from an api: `request`, `node-fetch`, `wreck`, etc.  
     
All functions must use the `async/await` pattern.  To reduce code duplication, you may want to create supporting files.

---

1. Use a library like `https://www.npmjs.com/package/node-fetch` to retrieve data from a remote api.
2. Create an `arena` file that exports a default class.
    1. Create a function named `async all()`.  The function should retrieve data from `http://www.clashapi.xyz/api/arenas`.  The function should return an array of arenas
        1. Ensure the call is 200
        2. Throw an error when the status is not 200, with appropriate data. The function should retrieve data from `http://www.clashapi.xyz/api/arenas/{id}`. The function should return an object.
    2. Create a function named `async find(id)`. 
      ```js
      export class default {
             
        async all() {
          // Code
        }
        
        async find(id) {
          // Code
        }
      }
      ```
3. Repeat #2 and all sub-steps for the card api `http://www.clashapi.xyz/api/cards`
4. Repeat #2 and all sub-steps for the chests api `http://www.clashapi.xyz/api/chests`
5. Repeat #2 and all sub-steps for the players api `http://www.clashapi.xyz/api/players`
6. Create an `index.js` file that exports out a default function.  The function's parameters should take a baseUri that is defaulted to `http://www.clashapi.xyz`.  The function should return an object literal that contains the following properties: `arenas`, `cards`, `chests`, and `players`.  Use the appropriate files to assign the properties.

```js
export default (baseUri) => {

  return {
    areanas: new Arena(baseUri),
    cards: new Card(baseUri)
    
    // More...
  };
  
}

```




### Resources

* [await definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
* [async definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

console.log(global); // counterpart to window from browser

console.log(globalThis); // refers to global object; it exists in all JS runtimes

console.log(global === globalThis); // true

console.log(this, this === module.exports); // empty object


// NOTE: the following keywords point to window in the browser; but they don't exist in NodeJS
// console.log(frames);
// console.log(self);
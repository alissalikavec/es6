/*
  Arrow functions are shorter ways of declaring a function compared to function
  expressions. However they have a few key differences:
  - Arrow functions are always anonymous
  - parentheses are optional with only a single parameter
  - cannot be used as constructors (e.g. function Person(){}), and will
    throw an error if you try to use 'new'
  - does not bind 'this', see https://mzl.la/2felxSE
  - does not bind arguments object
  - implicitly returns if no block body is given,
    also known as a "concise body", e.g.
    var foo = (x, y) => x + y; // returns x + y

    otherwise:
    var foo = (x, y) => { return x + y }
*/


var arrow = {
  findOdds: function( arr ){
    // go through arr using forEach and an arrow function
  },
  // fix this arrow function to take two arguments and return their sum
  sum: () => "Hello World"
}

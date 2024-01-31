// Original function
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

// Creating a new function with bind
const boundFunction = greet.bind({ name: "John" }, "Alice");

// Calling the bound function
console.log(boundFunction);
boundFunction(); // Output: Hello, Alice! My name is John.

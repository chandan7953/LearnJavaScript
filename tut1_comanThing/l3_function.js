// fuction

// 1. Normal Function
function add(a, b) {
  return a + b;
}
console.log("Addding 5 and 6 -> ", add(5, 6));

// 2.Anonymous Function
let anAdd = function (a, b) {
  return a + b;
};
console.log("Addding 5 and 6 -> ", anAdd(5, 6));

// 3.Arrow Function
let arrowAdd = (a, b) => {
  return a + b;
};
console.log("Addding 5 and 6 -> ", arrowAdd(5, 6));

// 4.Immediately invoked function
(function () {
  console.log("immediately invoked function");
})();

// captering all argument in function

function addAllElement() {
  let n = arguments.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(addAllElement(2, 4, 5));
console.log(addAllElement(10));
console.log(addAllElement(78, 12));
console.log(addAllElement(1, 2, 4, 5, 6));

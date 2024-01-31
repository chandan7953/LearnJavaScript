var result = Infinity - 1;
console.log(result); // Output: Infinity

// number
console.log(typeof 5);
console.log(typeof 5.23);
console.log(typeof NaN);
// string
console.log(typeof "str");
// boolean
console.log(typeof true);

// undefined
console.log(typeof undefined);

let obj = { a: 23 };
let arr = [1, 2, 3];
// object
console.log(typeof null);
console.log(typeof obj);
console.log(typeof arr);

// to check is an array or not
// Array show to type of property array and object
console.log(Array.isArray(arr));

// null its show true so to make check
// if null -> true
// so !null -> false
if (!null) {
  console.log("chandan");
}
// if undefined -> true
// so !undefined -> false
if (!undefined) {
  console.log("chandan chandan");
}

let str = ""; //false
if (str) {
  console.log("str is empty");
}

function abc() {
  console.log("hello");
}
console.log(typeof abc);

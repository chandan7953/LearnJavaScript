let a = 7.58;

// converting float in int
let b = parseInt(a);
console.log(b);

// converting int to string
let num = 42;
let strNum = num.toString();
console.log(strNum);

// converting string in int
let str = "42";
let n = parseInt(str);
console.log(n);

// how to display upto 3 decimal value
let d = 124.2354678;
let formattedNumber = d.toFixed(3);
console.log(formattedNumber);

// how to increase character from b to c 
let char = 'b';
let nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
console.log(nextChar);

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

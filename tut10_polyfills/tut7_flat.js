// var result = Infinity - 1;
// console.log(result); // Output: Infinity

delete Array.prototype.flat;

Array.prototype.flat = function (depth = 1) {
  let result = [];
  let arr = this; // Use 'let' to declare 'arr' locally

  function myFlat(arr, currDepth) {
    arr.forEach((element) => {
      if (Array.isArray(element) && (currDepth > 0 || currDepth == Infinity)) {
        myFlat(element, currDepth - 1);
      } else {
        result.push(element);
      }
    });
  }

  myFlat(arr, depth);
  return result;
};

let m = [6, 7, 8, [45, 86, 45, 7]];
let res = m.flat(Infinity);
var nestedArray = [1, 2, [3, 4, [5, 6]]];
var flattenedArray = nestedArray.flat(1);

console.log(m);
console.log(res);

console.log();

console.log(nestedArray);
console.log(flattenedArray);

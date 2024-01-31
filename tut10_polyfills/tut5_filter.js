delete Array.prototype.filter;

Array.prototype.filter = function (callback) {
  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

let arr = [2, 5, 8, 9];
let res = arr.filter((ele, index, arr) => {
  console.log(`element - ${ele} index ${index}  Array ${arr}`);
  return ele % 2 == 0;
});

console.log(arr);
console.log(res);

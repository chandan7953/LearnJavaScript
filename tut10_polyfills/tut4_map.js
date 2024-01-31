delete Array.prototype.map;

Array.prototype.map = function (callback) {
  let arr = this;
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
};

let arr = [2, 5, 8, 9];
let res = arr.map((ele, index, arr) => {
  console.log(`element - ${ele} index ${index}  Array ${arr}`);
  return ele + 2;
});

console.log(arr);
console.log(res);

delete Array.prototype.reduce;
Array.prototype.reduce = function (callback, initialValue) {
  let accumulator = initialValue;
  // either it will be having a number
  // or it will be undefined
  for (let i = 0; i < this.length; i++) {
    // if initialValue not pass then it take first Element as accumulator and iterate next index
    if (accumulator === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callback(accumulator, this[i], i);
    }
  }
  return accumulator;
};

let arr = [4, 5, 1];

let res1 = arr.reduce((accumulator, currElement, index) => {
  return accumulator + currElement;
}, 10);
console.log(res1);
let res2 = arr.reduce((accumulator, currElement, index) => {
  return accumulator + currElement;
});

console.log(res2);

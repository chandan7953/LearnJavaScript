delete Function.prototype.apply;

Function.prototype.apply = function (obj, arr) {
  obj.tempFun = this;
  const ans = obj.tempFun(...arr);
  delete obj.tempFun;
  return ans;
};

let obj = {
  a: 5,
  b: 10,
};

function sum(a, b) {
  console.log();
  console.log(this);
  console.log(this.a + " " + this.b);
  console.log(a + b);
  console.log();
}

console.log(obj);
sum(55, 45);
sum.apply(obj, [1, 2]);

// this will make like this
// { a: 5, b: 10, tempFun: [Function: sum] }

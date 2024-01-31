delete Function.prototype.bind;

Function.prototype.bind = function (obj, ...args) {
  const oldFn = this;

  const newFunc = function (...nonFixedArgs) {
    return oldFn.call(obj, ...args, ...nonFixedArgs);
  };

  return newFunc;
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
const total = sum.bind(obj, 1, 2);
total();

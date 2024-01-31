async function fetchData() {
  //   return "chandan";
  //   return 5;
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve("Data fetched!");
  //     }, 2000);
  //   });
  //   return function () {
  //     console.log("hello");
  //   };
  //   throw new Error("some error");
}

// checking async is return promise or not
let x = fetchData();
console.log(typeof x);
if (x instanceof Promise) {
  console.log("It is a Promise!");
} else {
  console.log("It is not a Promise.");
}

// now checking type of returning data in then block

x.then((data) => {
  console.log(typeof data);
  console.log(data);
}).catch((err) => {
  console.log(err.message);
});

// asyn function alwayas return a promise no matter  it is function
// and if return any thing it will be execute then block

// if we throw or any error then it will be execuate by catch block

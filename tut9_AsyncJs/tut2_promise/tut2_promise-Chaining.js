let promise = new Promise((resolve, reject) => {
  resolve(25);
  // This reject will be ignored because the Promise is already resolved.
  reject("error");
})
  .then((data) => {
    console.log(data); // Output: 25
    // You can return a value to be used in the next then block
    return 9;
  })
  .then((data) => {
    console.log(data); // Output: 9
    // Returning a rejected Promise will trigger the next catch block
    return Promise.reject("than error");
  })
  .catch((err) => {
    console.log(err); // Output: than error
    // You can return a value to be used in the next then block
    return "catch error";
  })
  .then((data) => {
    console.log(data); // Output: catch error
    // Returning a resolved Promise will trigger the next then block
    return Promise.resolve("resolved value");
  })
  .finally(() => {
    console.log("final block");
    // The finally block doesn't receive any value.
  });

let promise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const success = false;

    if (success) {
      resolve("Operation succeeded!");
    } else {
      reject("Operation failed!");
    }
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
    // This will not be executed since the Promise is rejected.
    return new Promise((res, rej) => {
      res("first then block");
    });
  })
  .then((data) => {
    console.log(data);
    // This will not be executed since the Promise is rejected.
    return "second then";
  })
  .catch((error) => {
    console.error("First catch block:", error);
    // Handle or rethrow the error
    throw new Error("Additional error in first catch block");
  })
  .catch((error) => {
    console.error("Second catch block:", error.message);
    // This catch block will handle the error thrown in the first catch block.
  })
  .finally(() => {
    console.log("Final block");
  });

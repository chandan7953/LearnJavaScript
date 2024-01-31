try {
  console.log(2);
  console.log(a);
  console.log(1);
} catch (error) {
  console.log(error);
  console.log(error.message);
  console.log(error.name);
  console.log(error.stack);
} finally {
  console.log("finally block .....");
}

// if we find any error in try block it stop the execuation there only any send errror to catch block
// here a is not define so it not print 1
// but 1 print because it execute before a statement
// so whenever it found error it stop execuation and send to catch block

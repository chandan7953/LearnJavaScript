try {
  console.log(2);
  throw new Error("Some Error .....");
  console.log(1);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("finally block .....");
}

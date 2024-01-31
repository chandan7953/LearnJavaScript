async function myfun() {
  let x = await new Promise((resolve, reject) => {
    resolve(20);
  });
  console.log(x);
}

myfun();

// always try to give promise commend with await  it basically wait to complete promise then it execute next step
// without async we cannot use await

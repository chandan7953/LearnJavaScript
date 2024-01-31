/*Every Promise will have 3 possible states ( pending, rejected, fullfilled )

as soon as the promise is created it's state will be <pending>

a promise's state can be mutated from 
<pending> to <fullfilled>
<pending> to <rejected>
<pending> forever

Once a promise gets `settled` ( reached either to fullfilled or rejected) 
then the promise cann't be mutated to some other value .


How many maximum states a promise can go through ?
2
ans: (pending, fullfilled) or (pending , rejected).
*/

// every promise have resolve and reject function
// promise constructor expect the executor function and executor expect the resolve and reject function
function executor(resolve, reject) {
  console.log(typeof resolve, typeof reject);
}

let promise1 = new Promise(executor);
console.log(promise1); //<pending></pending>

// it auto matically return promise to promise varable so we can not want to call as function
// just thing like array syntax
// let arr = new Array(45, 48, 35);
// console.log(arr);

// just like it return array to arr here it return promise state to variable so we dont have to call
let promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log(promise);
    resolve(true);
    console.log(promise);
  }, 1000);
  console.log(2);
});

// A promise can have multiple then  and catch block but only one finally block
// then and catch can return new promise

/*
    Notes for Promise chaining 

    1. then method returns a promise that will indicate the execution or non execution of the callback passed to then method 

       let x = prom.then(cb);

        if `cb` is executed 
            case i: without any error inside `cb`
                => x state will change fullfilled with the data of x being the value returned by `cb`
            case ii: error inside `cb`
                => x state will change to rejected with the data of x being the Error object which occured inside `cb`.

        if `cb` is not executed => x state will change to rejected with the data of x being the value with which `prom` is rejected.


    2. catch method will also returns a promise that will be fullfilled always but will be rejected when there's an error encountered inside the catch.
        let x = prom.catch(cb);

        if `cb` is called
            case i: no error occured inside the `cb` => x (fullfilled) with data returned by the `cb`
            
            case ii: error occured inside the `cb` => 
                x => {rejected, Error}
        if `cb` is not called:
            x will be fullfilled with the data with which the prom is fullfilled

*/

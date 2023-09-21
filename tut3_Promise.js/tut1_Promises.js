/*

I promised to give the pen to vikas by tomorrow 12:00PM

possible states of the promsie: 

before 12:00PM( if the pen is given)     promise will become `fullfilled`.
before 12:00PM( if the pen is not given) promise will be in the `pending` state 
>= 12:00 PM (if the pen is given)        promise will be `fullfilled`
>= 12:00 PM (if pen is not given)        promise will be `rejected`

Error scenarios:

Every Promise will have 3 possible states ( pending, rejected, fullfilled )

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
console.log(promise1); //<pending>

// case 1:
let promise2 = new Promise((resolve, reject) => {
    resolve();
    console.log("chandan");
    console.log("singh");
    reject();
    console.log("I am developer");
})
console.log(promise2);
// output
// chandan
// Singh 
// I am developer
// promise2 <fulfilled>

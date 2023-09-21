// call method is used for explicit binding


// the call method is used to invoke a function with a 
// specified this value and arguments provided individually. 
// It allows you to change the context (the value of this) under 
// which a function is executed.

let user = {
    nam: 'pc',
    age: 23,
}

function test(test1, test2) {
    nam = test1;
    console.log(this, test1, test2);
}

test('this is my test1', 'this is my test2');

// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');
// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');
// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');
// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');
// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');
// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');

// this is my normal function invocation
// functionName(arg1,arg2);
// functionName.call(obj,arg1,arg2);


const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
      console.log(this.firstName + ' ' + this.lastName);
    }
  };
  
  const anotherPerson = {
    firstName: 'Jane',
    lastName: 'Smith'
  };
  
  // Use call to invoke the fullName function with a different context
  person.fullName.call(anotherPerson); // Outputs: Jane Smith
  
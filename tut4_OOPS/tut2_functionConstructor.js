console.log("\n---------functional Constructor----------\n");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  //case 1

  //   this.fullName = function() {
  //     console.log(this.firstName + " " + this.lastName);
  //   };
}

const funCon1 = new Person("Chandan", "Singh");

// case 2
// funCon1.fullName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };

// case 1 and case 2 mean same it make copy of function in object

// to prevent this we use prototype which add in prototype

Person.prototype.fullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

console.log(funCon1);
console.log(funCon1.firstName);
funCon1.fullName();

console.log("\n\n");

const funCon2 = new Person("Mahesh", "Pagar");

console.log(funCon2);

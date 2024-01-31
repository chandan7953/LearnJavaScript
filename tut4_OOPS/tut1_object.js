console.log("\n---------object----------\n");

const obj = {
  firstName: "Chandan",
  lastName: "Singh",
  greet: function () {
    console.log("Hi");
  },
  sayHello() { 
    console.log("Hello");
  },

  set setName(firstName) {
    this.firstName = firstName;
  },

  get getName() {
    return this.firstName;
  },
};

// obj.prototype.fullName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };

obj.setName = "Aman";
obj.getName;


console.log(obj);
obj.sayHello();

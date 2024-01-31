console.log("\n---------class----------\n");

class Students {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    console.log(`Hi ${this.firstName} ${this.lastName}`);
  }
}

const stud1 = new Students("Chandan", "Singh");

console.log(stud1);

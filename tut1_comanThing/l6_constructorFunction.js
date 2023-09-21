// constructor function

function Person(firstNmae, lastName, age){
    this.firstNmae = firstNmae;
    this.lastName = lastName;
    this.age = age;

    this.fullName = ()=>{
        return this.firstNmae + " " + this.lastName;
    }
}

let p1 = new Person("Chandan", "singh", 25);
let p2 = new Person("Aman", "pawar", 25);

console.log(p1);
console.log(p2);

for (const key in p1) {
    console.log(key +" " + p1[key]);
}
console.log(typeof p1); //object;

console.log(typeof Person); // function

// to add element in object 

Person.contury = "Indian";

console.log(p1);
console.log(p2);

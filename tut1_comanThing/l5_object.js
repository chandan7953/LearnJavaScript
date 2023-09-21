let person = {
    fisrtName : "chandan",
    lastName : "singh",
    age : 25,
    fullName: function(){
        return this.fisrtName + " " + this.lastName;
    },

    // when we use getter and  setter we can called as property called
    get  getName(){
        return this.fisrtName.toUpperCase();
    },
    set setName(age){
        this.age = age;
    },

    fullDetail : ()=>{
        return `I am ${this.fisrtName} ${this.lastName} and my age is ${this.age}`;
    }
}

console.log(person.fisrtName);
console.log(person.fullName);
console.log(person.fullName());

console.log(person.getName)
person.setName = 26;
console.log(person.fullDetail())

// to add some new property 
person.National = "Indian";
console.log(person);

// we can also access by square bracket 
console.log(person['age']);
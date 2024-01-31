let obj = {
  name: "Chandan",
  age: 25,
};

// obj to json string
const jsonString = JSON.stringify(obj);

console.log(jsonString);

// json string to object
const person = JSON.parse(jsonString);

console.log(person);

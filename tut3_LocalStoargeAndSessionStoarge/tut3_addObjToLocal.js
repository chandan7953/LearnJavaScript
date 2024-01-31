// Creating an object with multiple key-value pairs
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
  country: "USA",
  language: "English",
};

// Converting the object to a JSON string and storing it in localStorage
localStorage.setItem("user", JSON.stringify(user));

// Retrieving the JSON string from localStorage and parsing it back to an object
const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser);

// Now you can access individual properties of the stored object
console.log(storedUser.firstName); // Outputs: John
console.log(storedUser.age); // Outputs: 30

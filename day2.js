// // This is a day 2 fo learning 

// // OBJECTS
// // Mutable means can modify or update 

// // In JavaScript, objects are versatile data structures used to store collections of key-value pairs.
// // They are fundamental to the language and can represent real-world entities or abstract concepts.
// // Here's a concise overview:

// // Key Features of JavaScript Objects
// // Key-Value Pairs: Objects consist of properties, where each property has a key (string or symbol)
// // and a value (any data type, including functions).


// const person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         console.log("Hello!");
//     }
// };


// // Dynamic Nature: You can add, modify, or delete properties at runtime.

// person.job = "Developer"; // Add
// person.age = 31;         // Modify
// delete person.greet;     // Delete


// // Methods: Functions stored as object properties are called methods.

// const car = {
//     brand: "Tesla",
//     start: function() {
//         console.log("Car started!");
//     }
// };
// car.start(); // Output: Car started!

// // Ways to Create Objects

// // Object Literals:

// const obj = { key: "value" };


// // Using new Object():

// const obj = new Object();
// obj.key = "value";


// // Using Constructors:

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const john = new Person("John", 30);


// // Using Object.create():

// const prototype = { greet: function() { console.log("Hi!"); } };
// const obj = Object.create(prototype);
// obj.name = "Alice";

// // Accessing Properties
// // Dot Notation:
// console.log(person.name); // Output: John

// // Bracket Notation:
// console.log(person["age"]); // Output: 30

// // Common Use Cases
// // Storing structured data.
// // Representing entities like users, products, etc.
// // Encapsulating related data and behavior.

// // Objects are a cornerstone of JavaScript, enabling powerful and flexible programming paradigms
// // like object-oriented and functional programming.

// let myObj = {
//     // Integer Property.
//     int_prop: 5,

//     // String Property.
//     str_prop: "GeeksforGeeks",

//     // Object Property (Date).
//     obj_prop: new Date(),

//     // Object Property.
//     inner_obj: {
//         int_prop: 6
//     },

//     // Function Property.
//     func_prop: function() {
//         console.log("Welcome to GeeksforGeeks!");
//     }
// };

// console.log(myObj.int_prop);
// console.log(myObj.str_prop);
// console.log(myObj.obj_prop.toLocaleTimeString());
// console.log(myObj.inner_obj.int_prop);
// myObj.func_prop();

// // 5
// // GeeksforGeeks
// // 5:47:55 PM
// // 6
// // Welcome to GeeksforGeeks!


const person1 = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "traveling"],
    address: {
        city: "New York",
        country: "USA"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
   }
}

person1.greet(); // Output: Hello, my name is Alice
person1["hobbies"].forEach(hobby => {
    console.log(`I enjoy ${hobby}`);
}   ); // Output: I enjoy reading, I enjoy traveling


const person2 = {    
    name: "Bob",
    age: 30,
    hobbies: ["gaming", "cooking"]
}


// destructuring assignment is a convenient way to extract values from objects or arrays into distinct variables.
const {name:username, age:userAge, hobbies:userHobbies} = person2;

console.log(`Username: ${username}, Age: ${userAge}`); // Output: Username: Bob, Age: 30
userHobbies.forEach(hobby => {
    console.log(`Hobby: ${hobby}`);
}); // Output: Hobby: gaming, Hobby: cooking


// Production example: User profile
const user = {
  id: 'user_123',           // String
  name: 'Alex Johnson',     // String
  isAdmin: false,          // Boolean
  lastLogin: new Date(),    // Date object
  preferences: {            // Nested object
    theme: 'dark',
    notifications: true
  },
  login() {                 // Method
    console.log(`${this.name} logged in`);
  }
};

// Dot notation (most common)
console.log(user.name); // "Alex Johnson"

// Bracket notation (dynamic keys)
const key = 'lastLogin';
console.log(user[key]); // Current date

// Optional chaining (modern JS)
console.log(user?.preferences?.theme); // "dark"

// Dot notation (most common)
console.log(user.name); // "Alex Johnson"

// Bracket notation (dynamic keys)
const key = 'lastLogin';
console.log(user[key]); // Current date

// Optional chaining (modern JS)
console.log(user?.preferences?.theme); // "dark"


// Adding properties
user.email = 'alex@company.com';

// Updating
user.isAdmin = true;

// Deleting (rare in production)
delete user.preferences.notifications;

// Typical API response processing
async function getUser() {
  const response = await fetch('/api/user');
  const data = await response.json();
  
  // Validate and transform
  return {
    id: String(data.id),
    name: data.name.trim(),
    roles: Array.isArray(data.roles) ? data.roles : []
  };
}

// app.config.js
export default {
  api: {
    baseURL: process.env.API_URL || 'https://api.example.com',
    timeout: 5000
  },
  features: {
    darkMode: true,
    analytics: false
  }
};

function createUser(name, email, isAdmin = false) {
  return {
    name: name.trim(),
    email: email.toLowerCase(),
    isAdmin,
    createdAt: new Date(),
    getDisplayName() {
      return `${this.name} (${this.email})`;
    }
  };
}


// 1. What is Destructuring?
// A concise way to extract values from objects (or arrays) into distinct variables.


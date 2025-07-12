// FUNCTIONS

// In JavaScript, the concepts of pass by value and pass by reference describe how data is passed to functions. 
// Here's a concise explanation:

// PASS BY VALUE vs. PASS BY REFERENCE

// 1. PASS BY VALUE
// Definition: A copy of the actual value is passed to the function.
// Applies to: Primitive data types (e.g., Number, String, Boolean, undefined, null, Symbol, BigInt).
// Behavior: Changes made to the parameter inside the function do not affect the original variable.
// Example:

let a = 10;

function modifyValue(x) {
  x = 20;
}

modifyValue(a);
console.log(a); // Output: 10 (original value remains unchanged)

// 2. PASS BY REFERENCE
// Definition: A reference (or memory address) to the original object is passed to the function.
// Applies to: Non-primitive data types (e.g., Object, Array, Function).
// Behavior: Changes made to the parameter inside the function affect the original object.
// Example:

let obj = { key: "value" };

function modifyObject(o) {
  o.key = "newValue";
}

modifyObject(obj);
console.log(obj.key); // Output: "newValue" (original object is modified)

// IMPORTANT NOTE

// JavaScript is technically pass by value for all types. However:

// For primitive types, the value itself is copied.
// For objects, the reference (memory address) is copied, so it behaves like "pass by reference."

// This behavior is sometimes referred to as "call by sharing".



// When you pass an array as a parameter, if the function changes any of the array's values, 
// that change is visible outside the function, as shown in the following example:

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30



// SCOPE AND CLOSURE

// 1.SCOPE
// Scope in JavaScript refers to the visibility and accessibility of variables in different parts of your code.
// There are two main types of scope:
// - Global Scope: Variables declared outside any function or block are globally accessible.
// - Local Scope: Variables declared within a function or block are only accessible within that function or block.
function myFunction() {
  let localVar = "I am local"; // Local scope
  console.log(localVar); // Accessible here
}
myFunction();
// console.log(localVar); // Error: localVar is not defined (not accessible here)




// 2.CLOSURE
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
// This allows the function to remember the environment in which it was created, enabling it to access variables from that scope even after the outer function has finished executing.
function outerFunction() {
  let outerVar = "I am from outer function";

  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from the outer function's scope
  }

  return innerFunction; // Returning the inner function
}
const closureFunc = outerFunction();
closureFunc(); // Output: "I am from outer function" (closure retains access to outerVar)
// Closures are useful for data encapsulation, creating private variables, and maintaining state in asynchronous operations.
// Example of a closure with a counter
function createCounter() {
  let count = 0; // Private variable

  return function() {
    count++; // Increment the count
    console.log(count); // Accessing the private variable
  };
}
const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
// Closures are a powerful feature in JavaScript, allowing functions to maintain state and create private variables.


// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
// (the lexical environment). In other words, 
// a closure gives a function access to its outer scope. 
// In JavaScript, closures are created every time a function is created, at function creation time.

// Lexical scoping
// Consider the following example code:


function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


// init() creates a local variable called name and a function called displayName(). 
// The displayName() function is an inner function that is defined inside init() and 
// is available only within the body of the init() function. 
// Note that the displayName() function has no local variables of its own. However, 
// since inner functions have access to the variables of outer scopes, 
// displayName() can access the variable name declared in the parent function, init().

// If you run this code in your console, you can see that the console.log() 
// statement within the displayName() function successfully displays the value of the name variable, 
// which is declared in its parent function. This is an example of lexical scoping, 
// which describes how a parser resolves variable names when functions are nested. 
// The word lexical refers to the fact that lexical scoping uses the location 
// where a variable is declared within the source code to determine where that variable is available. 
// Nested functions have access to variables declared in their outer scope.


// Here's a slightly more interesting example—a makeAdder function:

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12


// In this example, we have defined a function makeAdder(x), that takes a single argument x, 
// and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

// In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. 
// In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

// add5 and add10 both form closures. They share the same function body definition, 
// but store different lexical environments. In add5's lexical environment, x is 5, 
// while in the lexical environment for add10, x is 10.

// Functional Expressions

const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16



function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]



// Function hoisting
// Consider the example below:


console.log(square(5)); // 25

function square(n) {
  return n * n;
}


// This code runs without any error, despite the square() function being called before it's declared. 
// This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, 
// so the code above is equivalent to:


// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25

// Function hoisting only works with function declarations — not with function expressions. 
// The following code will not work:


console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};



// Immediately Invoked Function Expressions (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a code pattern that directly calls 
// a function defined as an expression. It looks like this:

(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();


// Instead of saving the function in a variable, the function is immediately invoked. 
// This is almost equivalent to just writing the function body, but there are a few unique benefits:

// It creates an extra scope of variables, which helps to confine variables to the place where they are useful.
// It is now an expression instead of a sequence of statements. 
// This allows you to write complex computation logic when initializing variables.



// CALLBACK/ASYNCHRONOUS CALLBACK 

// Asynchronous callbacks are functions passed as arguments to other functions that execute later, 
// usually after a time-consuming operation completes. Here are some practical examples:
// 1. Basic Example Using setTimeout
// One of the simplest examples of an asynchronous callback in JavaScript is the setTimeout() function. 
// This function executes a callback after a specified delay.
function greet() {
    console.log("Hello, world!");
}

setTimeout(greet, 3000); // Calls greet after 3 seconds


// In this example, the greet function serves as a callback and will be executed after 3 seconds.
// 2. Using Callbacks with Event Listeners
// Callbacks are commonly used in event handling. When an event occurs, the callback function is called.


document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});


// Here, the anonymous function provided is a callback that gets executed when the button is clicked.
// 3. Loading External Scripts
// When loading an external script, a callback can let you know when loading is complete.


function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);  // Execute callback on load
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}

loadScript('https://example.com/some-script.js', function(error, script) {
    if (error) {
        console.error(error);
    } else {
        console.log(`Loaded script: ${script.src}`);
    }
});


// In this example, the loadScript function takes a callback that executes after the script loads successfully.
// 4. Fetching Data from an API
// When making asynchronous HTTP requests, callbacks handle the response after the data is fetched.


function fetchData(url, callback) {
    fetch(url)
.then(response => response.json())
.then(data => callback(null, data))  // Call on successful data retrieval
.catch(error => callback(error));    // Call on error
}

fetchData('https://api.example.com/data', function(error, data) {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Fetched data:', data);
    }
});


// The fetchData function uses a callback to pass either the retrieved data or an error message.




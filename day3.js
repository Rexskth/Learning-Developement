// // ARRAY 

// // Array is a collection of items
// // It can hold any type of data: numbers, strings, objects, etc.
// // Arrays are dynamic, meaning they can grow or shrink in size as needed

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3


// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6


// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6
// console.log(fruits[4]); // undefined


// // Same goes for decresing the size of an array
// fruits.length = 2;
// console.log(Object.keys(fruits)); // ['0', '1']
// console.log(fruits.length); // 2


// // Array methods and empty slots


// // Array methods have different behaviors
// // when encountering empty slots in sparse arrays. In general, older methods 
// // (e.g., forEach) treat empty slots differently from indices that contain undefined.
// // Methods that have special treatment for empty slots include the following: 
// // concat(), copyWithin(), every(), filter(),
// // flat(), flatMap(), forEach(), indexOf(), lastIndexOf(),
// // map(), reduce(), reduceRight(), reverse(), slice(), some(), sort(), 
// // and splice(). Iteration methods such as forEach don't visit empty
// // slots at all. Other methods, such as concat, copyWithin, etc.,
// // preserve empty slots when doing the copying, so in the end the array is still sparse.


// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });
// // Output:
// // 0: red
// // 1: yellow
// // 2: blue
// // 5: purple

// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

// // Newer methods (e.g., keys) do not treat empty slots specially and
// // treat them as if they contain undefined.
// // Methods that conflate empty slots with undefined elements include the following:
// // entries(), fill(), find(), findIndex(), findLast(), findLastIndex(),
// // includes(), join(), keys(), toLocaleString(),
// // toReversed(), toSorted(), toSpliced(), values(), and with(). 


// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// const iterator = colors.keys();
// console.log(iterator)
// // here iterator is special iterator object that iterates over the keys of the array/can produce the keys one-by-one when needed. 
// for (const key of iterator) {
//   console.log(`${key}: ${colors[key]}`);
// }
// // Output
// // 0: red
// // 1: yellow
// // 2: blue
// // 3: undefined
// // 4: undefined
// // 5: purple

// const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']

// // Create an array
// // This example shows three ways to create new array: 
// // first using array literal notation, 
// // then using the Array() constructor, and
// // finally using String.prototype.split() to build the array from a string.


// // 'fruits' array created using array literal notation.
// const fruits = ["Apple", "Banana"];
// console.log(fruits.length);
// // 2

// // 'fruits2' array created using the Array() constructor.
// const fruits2 = new Array("Apple", "Banana");
// console.log(fruits2.length);
// // 2

// // 'fruits3' array created using String.prototype.split().
// const fruits3 = "Apple, Banana".split(", ");
// console.log(fruits3.length);
// // 2


// // Create a string from an array
// // This example uses the join() method to create a string from the fruits array.


// const fruits = ["Apple", "Banana"];
// const fruitsString = fruits.join(", ");
// console.log(fruitsString);
// // "Apple, Banana"


// // Access an array item by its index
// // This example shows how to access items in the fruits array 
// // by specifying the index number of their position in the array.


// const fruits = ["Apple", "Banana"];

// // The index of an array's first element is always 0.
// fruits[0]; // Apple

// // The index of an array's second element is always 1.
// fruits[1]; // Banana

// // The index of an array's last element is always one
// // less than the length of the array.
// fruits[fruits.length - 1]; // Banana

// // Using an index number larger than the array's length
// // returns 'undefined'.
// fruits[99]; // undefined


// // Find the index of an item in an array
// // This example uses the indexOf() method to 
// // find the position (index) of the string "Banana" in the fruits array.


// const fruits = ["Apple", "Banana"];
// console.log(fruits.indexOf("Banana"));
// // 1
// // Check if an array contains a certain item
// // This example shows two ways to check if the fruits array contains "Banana" and "Cherry": 
// // first with the includes() method, and 
// // then with the indexOf() method to test for an index value that's not -1.


// const fruits = ["Apple", "Banana"];

// fruits.includes("Banana"); // true
// fruits.includes("Cherry"); // false

// // If indexOf() doesn't return -1, the array contains the given item.
// fruits.indexOf("Banana") !== -1; // true
// fruits.indexOf("Cherry") !== -1; // false , 
// // here we are checking if the index of "Cherry" is not -1, 
// // which means it exists in the array, but it does not exist so it returns false


// // Append an item to an array
// // This example uses the push() method to append a new string to the fruits array.


// const fruits = ["Apple", "Banana"];
// const newLength = fruits.push("Orange");
// console.log(fruits);
// // ["Apple", "Banana", "Orange"]
// console.log(newLength);
// // 3


// // Remove the last item from an array
// // This example uses the pop() method 
// // to remove the last item from the fruits array.


// const fruits = ["Apple", "Banana", "Orange"];
// const removedItem = fruits.pop();
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItem);
// // Orange

// // Note: pop() can only be used to remove the last item from an array. 
// // To remove multiple items from the end of an array, see the next example.

// // Remove multiple items from the end of an array
// // This example uses the splice() method to remove the last 3 items from the fruits array.


// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// const start = -3;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItems);
// // ["Strawberry", "Mango", "Cherry"]

// // Truncate an array down to just its first N items
// // This example uses the splice() method to truncate the fruits array down to just its first 2 items.


// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// const start = 2;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItems);
// // ["Strawberry", "Mango", "Cherry"]


// // Remove the first item from an array
// // This example uses the shift() method to remove the first item from the fruits array.


// const fruits = ["Apple", "Banana"];
// const removedItem = fruits.shift();
// console.log(fruits);
// // ["Banana"]
// console.log(removedItem);
// // Apple

// // Note: shift() can only be used to remove the first item from an array. 
// // To remove multiple items from the beginning of an array, see the next example.


// // Remove multiple items from the beginning of an array
// // This example uses the splice() method to remove the first 3 items from the fruits array.


// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// const start = 0;
// const deleteCount = 3;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Banana", "Mango"]
// console.log(removedItems);
// // ["Apple", "Strawberry", "Cherry"]

// // Add a new first item to an array
// // This example uses the unshift() method to add, at index 0, a new item to the fruits array — making it the new first item in the array.


// const fruits = ["Banana", "Mango"];
// const newLength = fruits.unshift("Strawberry");
// console.log(fruits);
// // ["Strawberry", "Banana", "Mango"]
// console.log(newLength);
// // 3


// // Remove a single item by index
// // This example uses the splice() method to remove the string "Banana" from the fruits array 
// // — by specifying the index position of "Banana".


// const fruits = ["Strawberry", "Banana", "Mango"];
// const start = fruits.indexOf("Banana");
// const deleteCount = 1;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Strawberry", "Mango"]
// console.log(removedItems);
// // ["Banana"]


// // Remove multiple items by index
// // This example uses the splice() method to remove the strings "Banana" and "Strawberry" from the fruits array 
// // — by specifying the index position of "Banana", along with a count of the number of total items to remove.


// const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
// const start = 1;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Apple", "Mango"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]



// // Replace multiple items in an array
// // This example uses the splice() method to replace the last 2 items in the fruits array with new items.


// const fruits = ["Apple", "Banana", "Strawberry"];
// const start = -2;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry");
// console.log(fruits);
// // ["Apple", "Mango", "Cherry"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]



// // Iterate over an array
// // This example uses a for...of loop to iterate over the fruits array, logging each item to the console.


// const fruits = ["Apple", "Mango", "Cherry"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// // Apple
// // Mango
// // Cherry

// // Call a function on each element in an array
// // This example uses the forEach() method to call a function on each element in the fruits array;
// // the function causes each item to be logged to the console, along with the item's index number.


// const fruits = ["Apple", "Mango", "Cherry"];
// fruits.forEach((item, index, array) => {
//   console.log(item, index);
// });
// // Apple 0
// // Mango 1
// // Cherry 2


// // Merge multiple arrays together
// // This example uses the concat() method to merge the fruits array with a moreFruits array, 
// // to produce a new combinedFruits array. Notice that fruits and moreFruits remain unchanged.


// const fruits = ["Apple", "Banana", "Strawberry"];
// const moreFruits = ["Mango", "Cherry"];
// const combinedFruits = fruits.concat(moreFruits);
// console.log(combinedFruits);
// // ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// // The 'fruits' array remains unchanged.
// console.log(fruits);
// // ["Apple", "Banana", "Strawberry"]

// // The 'moreFruits' array also remains unchanged.
// console.log(moreFruits);
// // ["Mango", "Cherry"]

// // shallo copy and deep copy of array 

// // shallow copy 

//         const originalArray = [1, 2, { a: 3 }];
//         const shallowCopyArray = [...originalArray];
//         // Modifying nested object in copy affects original
//         shallowCopyArray[2].a = 4; 
//         console.log(originalArray[2].a); // Output: 4

// // deep copy

//         const originalData = { name: "Alice", details: { age: 30 } };
//         const deepCopyData = structuredClone(originalData);
//         deepCopyData.details.age = 31;
//         console.log(originalData.details.age); // Output: 30



// // Copy an array
// // This example shows three ways to create a new array from the existing fruits array: 
// // first by using spread syntax, 
// // then by using the from() method, and then by using the slice() method.


// const fruits = ["Strawberry", "Mango"];

// // Create a copy using spread syntax.
// const fruitsCopy = [...fruits];
// // ["Strawberry", "Mango"]

// // Create a copy using the from() method.
// const fruitsCopy2 = Array.from(fruits);
// // ["Strawberry", "Mango"]

// // Create a copy using the slice() method.
// const fruitsCopy3 = fruits.slice();
// // ["Strawberry", "Mango"]


// // All built-in array-copy operations 
// // (spread syntax, Array.from(), Array.prototype.slice(), and Array.prototype.concat()) 
// // create shallow copies. If you instead want a deep copy of an array, you can use JSON.stringify() 
// // to convert the array to a JSON string, and then JSON.parse() to convert the string back into a new array 
// // that's completely independent from the original array.


// const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));// this will create a deep copy of the array

// // You can also create deep copies using the structuredClone() method, 
// // which has the advantage of allowing transferable objects in the 
// // source to be transferred to the new copy, rather than just cloned.

// // Finally, it's important to understand that assigning an existing array to a new variable doesn't 
// // create a copy of either the array or its elements. Instead the new variable is just a reference, 
// // or alias, to the original array; that is, the original array's name and the new variable name are just 
// // two names for the exact same object (and so will always evaluate as strictly equivalent). Therefore, 
// // if you make any changes at all either to the value of the original array or to the value of the new variable, 
// // the other will change, too:


// const fruits = ["Strawberry", "Mango"];
// const fruitsAlias = fruits;
// // 'fruits' and 'fruitsAlias' are the same object, strictly equivalent.
// fruits === fruitsAlias; // true
// // Any changes to the 'fruits' array change 'fruitsAlias' too.
// fruits.unshift("Apple", "Banana");
// console.log(fruits);
// // ['Apple', 'Banana', 'Strawberry', 'Mango']
// console.log(fruitsAlias);
// // ['Apple', 'Banana', 'Strawberry', 'Mango']



console.log(Date.now()); // Outputs the current timestamp in milliseconds since January 1, 1970
console.log(new Date().getTime()); // Outputs the current timestamp in milliseconds since January 1, 1970
console.log(new Date().toISOString()); // Outputs the current date and time in ISO 8601 format
console.log(new Date().toLocaleString()); // Outputs the current date and time in a locale
console.log(new Date().toLocaleDateString()); // Outputs the current date in a locale-specific format
console.log(new Date().toLocaleTimeString()); // Outputs the current time in a locale-specific format
console.log(new Date().getFullYear()); // Outputs the current year
console.log(new Date().getMonth() + 1); // Outputs the current month (0

// SET 

// b. Set (Unique Values)

// Remove duplicates
const tags = ["react", "js", "react"];
const uniqueTags = new Set(tags); // {"react", "js"}


// Production Use:
// Tag systems
// Analytics deduplication

// TYPO CHECK 

// 4. Type Checking (Production Must)

// Always validate in production
typeof "hello"  // "string"
Array.isArray([]) // true
user instanceof Object // true



// REAL WORLD USE CASE 

// Real-World Patterns
// API Response Handling

fetch('/api/user')
  .then(res => res.json()) // Expect Object/Array
  .then(data => {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid response');
    }
  });


// Form Data Processing

const formData = {
  email: String(req.body.email).trim(), // Force string
  age: Number(req.body.age) || 0 // Default value
};


// Redux State Shape/


const initialState = {
  loading: false, // Boolean
  data: null,     // Object | null
  error: ""       // String
};


// Key Takeaways
// Always use const unless rebinding is needed

// Validate types for API responses/user input

// Prefer objects/arrays for structured data

// Use modern methods like .map(), .filter()

// Leverage Sets/Maps for specialized cases

// These types cover 99% of production use cases in frameworks like React, Next.js, and Node.js backends.


// .FILTER 

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// Syntax

filter(callbackFn)
filter(callbackFn, thisArg)

Parameters
// callbackFn
// A function to execute for each element in the array. 
// It should return a truthy value to keep the element in the resulting array, 
// and a falsy value otherwise. The function is called with the following arguments:

// element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// array
// The array filter() was called upon.

// thisArg Optional
// A value to use as this when executing callbackFn. See iterative methods.

// Return value
// A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.

// Find all prime numbers in an array
// The following example returns all prime numbers in the array:

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


// Searching in array
// Following example uses filter() to filter array content based on search criteria.


const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']


// MAP 

// The map() method of Array instances creates a new array populated with the results of calling a provided 
// function on every element in the calling array.

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// Mapping an array of numbers to an array of square roots
// The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.


const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]



// .REDUCE METHOD ON ARRAY 
// The reduce() method in JavaScript is a powerful tool for working with arrays. 
// It processes each element of an array using a callback function and reduces the array to a single value. 
// Here's a concise explanation:

Syntax:

array.reduce(callback, initialValue)

// callback: A function that executes on each array element. It takes four arguments:
// accumulator (required): The accumulated result from the previous callback execution.
// currentValue (required): The current element being processed.
// currentIndex (optional): The index of the current element.
// array (optional): The array reduce() was called on.
// initialValue (optional): The initial value for the accumulator. If not provided, the first array element is used as the initial value, and the iteration starts from the second element.
// Examples:
// Sum of Array Elements:


const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10

// Flatten an Array:


const nestedArray = [[1, 2], [3, 4], [5]];
const flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]

// Count Occurrences:


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }

// Key Points:
// reduce() is versatile and can be used for summing, flattening, grouping, or transforming data.
// Always provide an initialValue to avoid unexpected behavior, especially with empty arrays.
// It does not modify the original array.



// .FIND METHOD ON ARRAY

// The find() method in JavaScript is used to locate the first element in 
// an array that satisfies a given condition. If no element matches the condition, 
// it returns undefined. This method does not modify the original array.

// Syntax
// Copy the code
// array.find(callback(element, index, array), thisArg);

// Parameters
// callback: A function that tests each element. It takes three arguments:
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array find() was called on.
// thisArg (optional): Value to use as this when executing the callback.
// Key Points
// Stops searching once it finds the first matching element.
// Returns undefined if no match is found.
// Skips empty slots in sparse arrays.
// Example 1: Finding a number
// Copy the code


const numbers = [5, 12, 8, 130, 44];
const result = numbers.find(num => num > 10);
console.log(result); // Output: 12

// Example 2: Finding an object in an array
// Copy the code
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const user = users.find(user => user.name === 'Bob');
console.log(user); // Output: { id: 2, name: 'Bob' }

// Example 3: No match found
// Copy the code

const numbers = [1, 2, 3, 4];
const result = numbers.find(num => num > 10);
console.log(result); // Output: undefined


// This method is particularly useful for searching arrays of 
// objects or filtering based on specific conditions.





// FUNCTION 


"use strict";

// Question 1
// Mutating array methods are methods that modify the original array.
// They are methods that change the array in place and return the modified array while Non-mutating array methods, on the other hand, do not modify the original array.
// They are methods that return a new array based on the original array, leaving the original array unchanged.
// Examples of mutating array methods are: push(), pop(), shift(), unshift(), splice()
// Examples of non-mutating array methods are: slice(), concat(), filter(), map(), reduce()

// Question 2
const languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languages.push("Kotlin");

languages.splice(3, 0, "java");

languages.shift();

languages.unshift("Scala", "Swift");

languages.splice(languages.indexOf("PHP"), 1, "Go", "Rust");
console.log(languages);

// Question 3
//The value of fruit will be:
["apple", "mango", "orange"];

// Question 4
function maxNumber(arr) {
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return `maximum value is ${maxValue}`;
}

console.log(maxNumber([4, 5, 10, -2]));

// Question 5
function valTimesIndex(arr) {
  return arr.map((eachVal, index) => eachVal * index);
}

console.log(valTimesIndex([1, 2, 3]));

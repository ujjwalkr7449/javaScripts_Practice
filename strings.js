/* 1. Reverse a string */
let str = "hello";
console.log(str.split("").reverse().join(""));

/* 2. Check palindrome */
let word = "madam";
let reversed = word.split("").reverse().join("");

console.log(word === reversed ? "Palindrome" : "Not palindrome");
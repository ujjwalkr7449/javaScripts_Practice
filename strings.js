/* 1. Reverse a string */
let str = "hello";
console.log(str.split("").reverse().join(""));

/* 2. Check palindrome */
let word = "madam";
let reversed = word.split("").reverse().join("");

console.log(word === reversed ? "Palindrome" : "Not palindrome");

/* 3. Count vowels */
let text = "javascript";
let count = 0;

for (let char of text.toLowerCase()) {
    if ("aeiou".includes(char)) {
        count++;
    }
}
console.log("Vowels:", count);

/* 4. Count characters */
let message = "hello world";
console.log("Length:", message.length);

/* 5. Convert to uppercase */
console.log("javascript".toUpperCase());
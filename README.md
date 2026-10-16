# javaScripts_Practice
# JavaScript Practice & Revision Guide

A structured JavaScript learning repository containing programming fundamentals, practical examples, logic-building exercises, interview questions, and revision notes. Designed for software development learners preparing for technical interviews and React development.



\


## Table of Contents

- [Project Overview](#project-overview)
- [Learning Objectives](#learning-objectives)
- [Software and Tools](#software-and-tools)
- [JavaScript Revision Sheets](#javascript-revision-sheets)
- [Essential Code Examples](#essential-code-examples)
- [Array Methods Cheat Sheet](#array-methods-cheat-sheet)
- [Important Interview Questions](#important-interview-questions)
- [Practice Problems](#practice-problems)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Learning and Mentorship](#learning-and-mentorship)
- [Learning Roadmap](#learning-roadmap)
- [Author](#author)
- [License](#license)

## Project Overview

This repository is my personal JavaScript practice workspace. It helps me strengthen programming fundamentals, develop problem-solving skills, and prepare for frontend and full-stack software development opportunities.

### Key Features

- JavaScript fundamentals with simple explanations.
- Topic-wise revision sheets and executable programs.
- Arrays, strings, functions, objects, Sets, and Maps.
- Modern JavaScript (ES6+) concepts.
- DOM manipulation and event handling.
- Asynchronous JavaScript, Promises, and async/await.
- Coding challenges and interview preparation.
- Practical foundation for React.js development.

## Learning Objectives

1. Understand JavaScript syntax and programming concepts.
2. Build logical thinking through daily coding practice.
3. Learn reusable functions and efficient array operations.
4. Understand asynchronous programming and API integration.
5. Prepare for JavaScript technical interviews.
6. Apply JavaScript knowledge to React.js projects.

## Software and Tools

| Software / Tool    | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| Visual Studio Code | Code editor and development environment          |
| JavaScript (ES6+)  | Programming language                             |
| Node.js            | Execute JavaScript outside the browser           |
| npm                | Manage JavaScript packages                       |
| Google Chrome      | Browser and JavaScript debugging                 |
| Chrome DevTools    | Inspect elements, debug code, and monitor errors |
| Git                | Version control                                  |
| GitHub             | Repository hosting and collaboration             |
| ESLint             | Identify code quality issues                     |
| Prettier           | Automatically format code                        |
| Postman            | Test APIs during backend integration             |
| React.js           | Build user interfaces using JavaScript           |

### Recommended Extensions for VS Code

- ESLint
- Prettier - Code formatter
- JavaScript (ES6) code snippets
- GitLens
- Error Lens

## JavaScript Revision Sheets

### 1. Variables

```javascript
var oldVariable = "Avoid using var in most modern code";
let age = 22;
const language = "JavaScript";

console.log(age);
console.log(language);
```

**Remember:**

- `let`: Reassignment is allowed.
- `const`: Reassignment is not allowed.
- `var`: Older declaration with function scope.

### 2. Data Types

```javascript
let name = "Ujjwal";       // String
let age = 22;              // Number
let isDeveloper = true;    // Boolean
let score;                 // Undefined
let result = null;         // Null
let skills = ["JS", "React"]; // Array
let user = { name: "Ujjwal" }; // Object

console.log(typeof name);
console.log(typeof age);
console.log(typeof isDeveloper);
```

**Interview note:** `typeof null` returns `"object"` because of a historical JavaScript behavior.

### 3. Operators

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division
console.log(a % b);  // Remainder: 1
console.log(a ** b); // Exponentiation: 1000

console.log(a === b); // Strict equality
console.log(a > b);   // Comparison
console.log(a > 5 && b < 5); // Logical AND
```

**Remember:** Prefer `===` over `==` when you need equality without automatic type conversion.

### 4. Conditional Statements

```javascript
const marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Keep practicing");
}
```

### 5. Loops

```javascript
// For loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// For...of loop
for (const item of [10, 20, 30]) {
    console.log(item);
}
```

### 6. Functions

```javascript
function add(a, b) {
    return a + b;
}

const multiply = (a, b) => a * b;

console.log(add(10, 20));
console.log(multiply(4, 5));
```

**Remember:** Parameters receive input, and `return` sends a result back to the caller.

### 7. Strings

```javascript
const text = "JavaScript";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("Script"));
console.log(text.slice(0, 4));

const reversed = text.split("").reverse().join("");
console.log(reversed);
```

### 8. Arrays

```javascript
const numbers = [10, 20, 30, 40];

numbers.push(50);
numbers.pop();

console.log(numbers[0]);
console.log(numbers.length);

const doubled = numbers.map(num => num * 2);
const filtered = numbers.filter(num => num > 20);
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(doubled);
console.log(filtered);
console.log(sum);
```

### 9. Objects

```javascript
const student = {
    name: "Ujjwal",
    age: 22,
    skills: ["JavaScript", "React"]
};

console.log(student.name);

student.city = "Patna";

const { name, age } = student;

console.log(name, age);
console.log(Object.keys(student));
console.log(Object.values(student));
```

### 10. Sets and Maps

```javascript
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);

console.log([...uniqueNumbers]); // [1, 2, 3, 4]

const user = new Map();

user.set("name", "Ujjwal");
user.set("role", "Developer");

console.log(user.get("name"));
console.log(user.has("role"));
```

### 11. Modern JavaScript (ES6+)

```javascript
// Template literals
const name = "Ujjwal";
console.log(`Hello, ${name}!`);

// Spread operator
const first = [1, 2];
const combined = [...first, 3, 4];

// Destructuring
const [a, b] = first;

// Nullish coalescing
const username = null;
console.log(username ?? "Guest");

// Optional chaining
const profile = {};
console.log(profile.address?.city);
```

### 12. Asynchronous JavaScript

```javascript
async function fetchUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Request failed:", error.message);
    }
}

fetchUsers();
```

**Remember:**

- A Promise represents the eventual result of an asynchronous operation.
- `async` functions return Promises.
- `await` waits for a Promise to settle within an async function.
- `try...catch` handles errors.

### 13. DOM Manipulation

```javascript
const heading = document.querySelector("h1");

if (heading) {
    heading.textContent = "JavaScript Revision";
}
```

HTML:

```html
<h1>Original Heading</h1>
<script src="script.js"></script>
```

**Remember:** The DOM allows JavaScript to read and modify HTML elements, content, attributes, and styles.

## Array Methods Cheat Sheet

| Method       | Purpose                                    |
| ------------ | ------------------------------------------ |
| `push()`     | Add an element at the end                  |
| `pop()`      | Remove the last element                    |
| `shift()`    | Remove the first element                   |
| `unshift()`  | Add an element at the beginning            |
| `map()`      | Transform each element into a new array    |
| `filter()`   | Select elements that match a condition     |
| `reduce()`   | Combine elements into one result           |
| `find()`     | Return the first matching element          |
| `includes()` | Check whether a value exists               |
| `some()`     | Check whether at least one element matches |
| `every()`    | Check whether all elements match           |
| `slice()`    | Copy a selected portion                    |
| `splice()`   | Add, remove, or replace elements in place  |
| `sort()`     | Sort elements in place                     |

Example:

```javascript
const numbers = [5, 10, 15, 20];

console.log(numbers.map(n => n * 2));
console.log(numbers.filter(n => n > 10));
console.log(numbers.find(n => n > 10));
console.log(numbers.reduce((sum, n) => sum + n, 0));
```

## Important Interview Questions

Prepare clear explanations and working code for these topics:

1. What is JavaScript?
2. Difference between `var`, `let`, and `const`.
3. Difference between `==` and `===`.
4. What are primitive and reference types?
5. What is hoisting?
6. What is scope?
7. What is a closure?
8. What are callbacks?
9. What are Promises?
10. Difference between `async/await` and `.then()`.
11. Difference between `map()`, `filter()`, and `reduce()`.
12. What is destructuring?
13. Difference between spread and rest operators.
14. What is the DOM?
15. What is event bubbling?
16. What is the difference between synchronous and asynchronous code?
17. What is the difference between `null` and `undefined`?
18. What is the `this` keyword?
19. What are modules in JavaScript?
20. How does JavaScript interact with APIs?

## Practice Problems

Solve these problems without copying a solution first.

### Beginner

- Print numbers from 1 to 100.
- Check whether a number is even or odd.
- Find the largest of three numbers.
- Calculate the factorial of a number.
- Reverse a string.
- Check whether a string is a palindrome.
- Count vowels in a string.

### Intermediate

- Find the largest and second-largest distinct numbers in an array.
- Remove duplicates from an array.
- Find the sum of array elements.
- Count the frequency of each element.
- Find common elements between two arrays.
- Group objects by a property.
- Sort an array of objects by age.
- Flatten a nested array.

### Advanced

- Implement a debounce function.
- Implement a throttle function.
- Create a counter using closures.
- Fetch data from an API and handle errors.
- Implement a simple Promise-based workflow.
- Build a search filter using DOM events.

## Project Structure

```text
javaScripts_Practice/
├── 01-basics/
│   ├── variables.js
│   ├── data-types.js
│   └── operators.js
├── 02-conditionals/
│   └── conditions.js
├── 03-loops/
│   └── loops.js
├── 04-strings/
│   └── strings.js
├── 05-arrays/
│   └── arrays.js
├── 06-functions/
│   └── functions.js
├── 07-objects/
│   └── objects.js
├── 08-sets-maps/
│   └── sets-maps.js
├── 09-modern-javascript/
│   └── es6-features.js
├── 10-asynchronous-js/
│   └── promises.js
├── 11-dom-events/
│   ├── index.html
│   └── script.js
├── 12-interview-questions/
│   └── logic-practice.js
└── README.md
```

## How to Run

### Step 1: Install Node.js

Download the LTS version from [nodejs.org](https://nodejs.org/).

### Step 2: Verify installation

```bash
node --version
npm --version
```

### Step 3: Run a JavaScript file

```bash
node 01-basics/variables.js
```

Use your browser to run programs that depend on HTML and the DOM.

## Learning and Mentorship

### Learning approach

- Learn one concept at a time.
- Write code independently.
- Test normal cases and edge cases.
- Debug errors instead of immediately copying solutions.
- Review previously learned topics every week.
- Explain each solution as if answering an interview question.
- Apply the concepts in small projects before moving to React.

### Mentorship and review

Use this section to record feedback from a teacher, senior developer, peer, or technical mentor.

| Field            | Details                                            |
| ---------------- | -------------------------------------------------- |
| Mentor name      | To be added                                        |
| Role / expertise | JavaScript / Frontend Development                  |
| Review topics    | Fundamentals, logic, ES6+, asynchronous JavaScript |
| Feedback         | To be updated                                      |
| Next improvement | To be updated                                      |

*This is a learning and feedback template; no mentor affiliation or endorsement is claimed.*

## Learning Roadmap

- [ ] Phase 1: Variables, data types, and operators
- [ ] Phase 2: Conditions and loops
- [ ] Phase 3: Strings and arrays
- [ ] Phase 4: Functions and objects
- [ ] Phase 5: ES6+ and array methods
- [ ] Phase 6: DOM and event handling
- [ ] Phase 7: Promises, async/await, and APIs
- [ ] Phase 8: Interview coding problems
- [ ] Phase 9: Build JavaScript projects
- [ ] Phase 10: Apply JavaScript concepts in React.js

## Author

**Ujjwal Kumar**

Software Development Learner | JavaScript | React.js | Python | FastAPI

GitHub: [ujjwalkr7449](https://github.com/ujjwalkr7449)

This repository documents my learning journey, coding practice, and continuous improvement in software development.


---

**Keep learning. Keep building. Keep improving.**

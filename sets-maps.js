/* 1. Remove duplicates */
const nums = [1, 2, 2, 3, 3, 4];
const unique = new Set(nums);

console.log([...unique]);

/* 2. Check whether a value exists */
console.log(unique.has(3)); 

/* 3. Find common elements */
const first = new Set([1, 2, 3, 4]);
const second = new Set([3, 4, 5, 6]);

const common = [...first].filter(num => second.has(num));
console.log(common); // [3, 4]

/* 4. Use Map */
const student = new Map();
student.set("name", "Ujjwal");
student.set("age", 22);

console.log(student.get("name"));
console.log(student.get("age"));

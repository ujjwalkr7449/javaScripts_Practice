/* 1. Remove duplicates */
const nums = [1, 2, 2, 3, 3, 4];
const unique = new Set(nums);

console.log([...unique]);

/* 2. Check whether a value exists */
console.log(unique.has(3)); 

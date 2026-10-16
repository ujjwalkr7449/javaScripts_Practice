/* 1. Print array elements */
let numbers = [10, 20, 30, 40];

for (let num of numbers) {
    console.log(num);
}

/* 2. Find sum */
let arr = [10, 20, 30, 40];
let sum = 0;

for (let num of arr) {
    sum += num;
}
console.log("Sum:", sum);

/* 3. Find largest number */
let values = [10, 50, 30, 90, 20];
let largest = values[0];

for (let num of values) {
    if (num > largest) {
        largest = num;
    }
}
console.log("Largest:", largest);


/* 4. Remove duplicates */
let data = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(data)];

console.log(unique);

/* 5. Double every number */
let result = [1, 2, 3, 4].map(num => num * 2);
console.log(result);

/* 6. Filter numbers greater than 10 */
let filtered = [5, 15, 8, 20, 12].filter(num => num > 10);
console.log(filtered);

/* 7. Find second-largest distinct number */
let nums = [10, 5, 20, 8, 20];
let uniqueNums = [...new Set(nums)].sort((a, b) => b - a);

console.log("Second largest:", uniqueNums[1]);
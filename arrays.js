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
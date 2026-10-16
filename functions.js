
/* 1. Add two numbers */
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

/* 2. Check even or odd */
function checkEven(num) {
    return num % 2 === 0;
}
console.log(checkEven(8));

/* 3. Find square */
const square = num => num * num;
console.log(square(5));

/* 4. Find maximum */
function maximum(a, b) {
    return a > b ? a : b;
}
console.log(maximum(10, 25));

/* 5. Calculate factorial */
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120


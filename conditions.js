/* 1. Even or Odd */
let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

/* 2. Positive, Negative, or Zero */
let number = -5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

/* 3. Largest of three numbers */
let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest:", a);
} else if (b >= a && b >= c) {
    console.log("Largest:", b);
} else {
    console.log("Largest:", c);
}

/* 4. Check voting eligibility */
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

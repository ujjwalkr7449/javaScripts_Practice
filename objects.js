/* 1. Create an object */
const student = {
    name: "Ujjwal",
    age: 22,
    course: "JavaScript"
};

console.log(student.name);

/* 2. Add a property */
student.city = "Patna";
console.log(student);

/* 3. Update a property */
student.age = 23;
console.log(student.age);

/* 4. Loop through object */
for (let key in student) {
    console.log(key, student[key]);
}

/* 5. Count object properties */
console.log(Object.keys(student).length);
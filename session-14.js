//function declaration

// function greet() {
//   // logic
//   console.log("Hello !!!");
// }

// fn call

// greet();
// greet();
// greet();
// greet();

// fn parameter -> name

// function greet(fname, lname) {
//   // logic
//   console.log("Hello ", fname + " " + lname);
// }

// // fn argument - Arun

// greet("Arun", "Rajan");
// greet("Reshma", "Devan");

// fn with return

// function add(a, b) {
//   a += 10; // a = a + 10 , 10 + 10
//   b += 20; // b = b + 20 , 20 + 20
//   return a + b; // 20 + 40
// }
// const result = add(10, 20);

// console.log("Result =", result);

//function expression

// const greetings = function () {
//   // logic
//   console.log("Hello !!!");
// };
// greetings();

// Arrow fn

// const greetings = () => {
//   // logic
//   console.log("Hello !!!");
// };

// greetings();

// arrow fn with parameter and return, short ver

// const add = (a, b) => a + b;
// const res = add(10, 20);
// console.log("Result =", res);

// const greet = name => name;

// const add = (a, b) => {
//   a += 10;
//   b += 20;
//   return a + b;
// };
// const res = add(10, 20);
// console.log("Result =", res);

const gradeCheck = (score) => {
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B+";
  if (score >= 60) return "B";
  if (score >= 50) return "C+";
  if (score >= 40) return "C";
  return "E";
};

const grade = gradeCheck(85);
console.log("Your grade is : ", grade);

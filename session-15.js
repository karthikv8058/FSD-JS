// // global scope
// let companyName = "abc";

// function showCompanyName() {
//   console.log("Company name is ", companyName);
// }
// showCompanyName();
// console.log(companyName);

// function showTotal() {
//   // fn scope
//   let total = 500;
//   console.log("Total =", total);
// }
// showTotal();
// let total = 1000;
// console.log("Fn outside, Total =", total);

// if (100 > 20) {
//   //block scope
//   let city = "Kochi";
//   console.log("City :", city);
// }
// console.log("Outside City :", city);

// if (100 > 20) {
//   var city = "Kochi"; // global scope
//   console.log("City :", city);
// }
// console.log("Outside City :", city);

// let country = "India";

// closure
// function outerFn() {
//   let state = "Kerala";
//   function innerFn() {
//     console.log("Country :", country);
//     console.log("State :", state);
//   }
//   innerFn();
// }
// outerFn();

// function outer() {
//   function inner() {
//     let age = 25;
//   }
//   inner();
//   console.log("Age :", age);
// }
// outer();

// function counter() {
//   let count = 0;
//   return function () {
//     count++; // count = count + 1;
//     console.log(count);
//   };
// }
// const increment = counter();
// increment(); // 1
// increment();
// increment();

// function counter() {
//   let count = 0;
//   return function () {
//     count++; // count = count + 1;
//     console.log(count);
//   };
// }
// const increment1 = counter();
// const increment2 = counter();

// increment1();
// increment2();
// increment1();
// increment2();

// Hoisting

// console.log(score); // undefined
// var score = 98; // 98
// console.log(score);

// console.log(score); // TDZ ( Temporal Dead Zone)
// let score = 98; // const
// // console.log(score);

// greeting();
// function greeting() {
//   console.log("Hello !!!");
// }

greeting();
const greeting = () => {
  console.log("Hello !!!");
};

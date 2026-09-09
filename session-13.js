// console.log("Hello");

// let name = "Arun";

// console.log("Name =", name);
// console.log(typeof name);

// let age = "35";
// let age = 35;

// type conversion
// let age = Number("35");

// let city; // undefined

// let city = null;

// console.log(typeof age);

// console.log(Number("abc"));
// console.log(Number(""));

// console.log(Number(true));
// console.log(Number(false));
// console.log(typeof null);

// console.log(typeof String(true)); // "true"

// console.log(String(undefined)); // "undefined"
// console.log(String(null)); // "null"

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(typeof Boolean("true")); // true , boolean
// console.log(typeof Boolean("11")); // true , boolean

// console.log(Boolean("null")); // false
// console.log(Boolean("")); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(undefined)); // false

//type coercion , auto

// console.log("10" + 2); // str , 102
// console.log("10" + 2 + 3); // str, 1023,
// let cal = "10" - 2;
// console.log(typeof cal, cal); // 8, num

// console.log("5" * 2); // 10, num
// console.log("15" / 3); // 5, num

// Arithmetic op => +, - , * ,/ , %, **,

// console.log( 10 + 10); // 20
// console.log(10 % 2); // 0
// console.log(10 ** 3); // 1000

// comparison op, > , < , >= , <= , ===, !==,

// console.log(10 > 2); // true
// console.log(10 < 2); // false
// console.log(10 > 10); //
// console.log(10 >= 10); // true
// console.log(10 === 10); // true
// console.log(10 == "10"); // true
// console.log(10 === "10"); // false

// Assignment op,

// let score = 90;
// // score += 5; // score = score + 5
// score -= 5; // score = score - 5

// console.log(score);

//logical op => &&, || , !

// console.log(false && false);
// console.log(true || false); // true
// // console.log(10 > 2 && 5 < 2); // false
// console.log(10 > 2 || 5 < 2); // true

// console.log(!false); // false

// conditional statements,

//if, if else, if else if

let score = 84;

// // if (score > 40) {
// //   console.log("Passed!");
// // }
// // console.log("All the best");

// if (score > 40) {
//     console.log("Passed!");
// } else {
//   console.log("Failed!!!");
// }
// console.log("All the best");

// if (score >= 90) {
//   console.log("A+");
// } else if (score >= 80) {
//   console.log("A");
// } else if (score >= 70) {
//   console.log("B+");
// } else if (score >= 60) {
//   console.log("B");
// } else {
//   console.log("E");
// }
// console.log("All the best");

// switch st,

// let month = 9;
// switch (month) {
//   case 1:
//     console.log("JAN");
//     break;
//   case 2:
//     console.log("FEB");
//     break;
//   case 3:
//     console.log("MAR");
//     break;
//   case 4:
//     console.log("APR");
//     break;
//   default:
//     console.log("Invalid month");
// }

// switch (score > 0) {
//   case score >= 90:
//     console.log("A+");
//     break;
//   case score >= 80:
//     console.log("A");
//     break;
//   default:
//     console.log("E");
// }
// console.log("All the best");

let weekDay = "asdasdsd";

switch (weekDay) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("End of the work week");
  case "Saturday":
  case "Sunday":
    console.log("Weekend !!!");
    break;
  default:
    console.log("Invalid week day");
    break;
}

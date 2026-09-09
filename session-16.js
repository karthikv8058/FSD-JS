// loops

// for (let i = 1; i < 5; i++) {
//   console.log("count =", i);
// }

// for (let i = 1; i < 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log("count =", i);
// }

// for (let i = 1; i < 5; i++) {
//   console.log("count =", i);
//   if (i === 3) {
//     break;
//   }
// }

// let stock = 10;
// while (stock > 0) {
//   console.log("stock =", stock);
//   stock--;
// }

// let stock = 10;
// do {
//   console.log("stock =", stock);
//   stock--;
// } while (stock > 0);

// let fruits = ["mango", "banana", "apple", "grapes", "orange"]; // length = 5;
// let lastIndex = fruits.length - 1;
// console.log(fruits[lastIndex]);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// let fruits = ["mango", "banana"];

// fruits.push("apple");
// fruits.pop();

// fruits.unshift("apple");
// fruits.shift();

// console.log("Fruits =", fruits);

// let fruits = ["mango", "banana", "apple", "grapes", "orange"];

// fruits.splice(1, 0, "pineapple", "abc");
// fruits.splice(1, 1, "pineapple");

// console.log(fruits.slice(1, 3));

// console.log(fruits);

let numbers = [1, 2, 3, 4, 5];

// map

// let result = numbers.map((n) => n * 2);

// let result = numbers.map((n) => {
//   return n * 2;
// });

// console.log("Result =", result);
// console.log("Array =", numbers);

//filter

// let result = numbers.filter((i) => i > 3);

// console.log("Result =", result);

//reduce

// let sum = numbers.reduce((sum, i) => sum + i, 0);

// console.log("Sum =", sum);

let user = {
  name: "Arun",
  age: 25,
};

// console.log(user.age);
// console.log(user["age"]);

// user.city = "TVM"; // add
// user.age = 30; // update

// delete user.age; // delete

// console.log(user);

// let keys = Object.keys(user);
// let values = Object.values(user);
// let entries = Object.entries(user);

// console.log(keys);
// console.log(values);
// console.log(entries);

for (let key in user) {
  console.log(user[key]);
}

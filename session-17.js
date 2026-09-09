// const originalObj = { name: "Alice", age: 25 };
// const copyObj = originalObj; // reference

// copyObj.age = 30;

// console.log(copyObj);
// console.log(originalObj);

// const arr1 = [1, 2, 3];
// const arr2 = arr1; // reference

// arr2.push(4);

// console.log(arr2);
// console.log(arr1);

// spread op, (...) - ES6

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// arr2.push(4);

// console.log(arr2);
// console.log(arr1);

// shallow copy

// const originalObj = { name: "Alice", age: 25 };
// const copyObj = { ...originalObj };

// copyObj.age = 30;

// console.log(copyObj);
// console.log(originalObj);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const mergedArr = [...arr1, ...arr2];

// console.log(mergedArr);

// const expArr1 = ["a", ...arr1, 50];

// console.log(expArr1);

// const randomNum = [12, 4, 8, 25, 1, 18];
// const sortedNum = [...randomNum].sort((a, b) => a - b);

// console.log(sortedNum);
// console.log(randomNum);

// const userBasicDetails = {
//   name: "Alice",
//   age: 25,
//   gender: "F",
// };

// const userAddressDetails = {
//   city: "TVM",
//   pincode: 695584,
//   state: "Kerala",
// };

// const userDetails = { ...userBasicDetails, ...userAddressDetails };

// console.log(userDetails);

// const updatedUserBasic = { ...userBasicDetails, age: 30, father: "John" };

// console.log(updatedUserBasic);

// // nested obj
// const user = {
//   name: "Alice",
//   age: 25,
//   gender: "F",
//   address: {
//     city: "TVM",
//     pincode: 695584,
//     state: "Kerala",
//   },
// };

// const copyUser1 = { ...user }; // nested , reference

// Deep copy / clone

// const copyUser2 = structuredClone(user); // nested

// // copyUser1.age = 30;
// // copyUser1.address.city = "Kollam";

// copyUser2.age = 20;
// copyUser2.address.city = "Idukki";

// console.log(copyUser2);
// console.log(user);

// const target = {
//   a: 1,
// };

// const source = {
//   b: 2,
//   c: 3,
// };

// // const res = Object.assign(target, source);
// const res = Object.assign({}, target, source);

// console.log(res);
// console.log(source);
// console.log(target);

const user = {
  name: "Akhil",
  age: 20,
};

Object.freeze(user);

user.name = "Arun";

console.log(user);

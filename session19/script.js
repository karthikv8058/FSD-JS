const card = document.querySelector("#card");
const cardTitle = document.querySelector("#cardTitle");
const toggleBtn = document.querySelector("#toggle");
const userForm = document.querySelector("#userForm");
const username = document.querySelector("#username");
const message = document.querySelector("#message");
const charCout = document.querySelector("#charCout");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("#form");

// cardTitle.textContent = "Welcome to DOM !!!"
cardTitle.innerHTML = "<i> Welcome to DOM !!! </i>";

// toggleBtn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     userForm.classList.toggle('toggle');
// });

username.addEventListener("input", (e) => {
  let username = e.target.value;
  charCout.textContent = `${username.length} / 10 characters`;
  charCout.style.color = username.length > 10 ? "red" : "green";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.textContent = username.value;
  message.appendChild(para);
});

// card.addEventListener('click', (e) => {
//     card.classList.toggle('selected');
//     // card.classList.add('selected');
//     // card.classList.remove('selected');
//     console.log('card clicked');

// })

// console.log(cardTitle.textContent);

// const cardTitles = document.querySelectorAll('.card-title');

// cardTitles.forEach((cardTitle) => {
//     console.log(cardTitle);
// })

const productList = document.querySelector("#products");
const loadButton = document.querySelector("#load-btn");
const feedbackForm = document.querySelector("#feedback-form");
const result = document.querySelector("#result");

//https://jsonplaceholder.typicode.com/posts?_limit=3

async function loadProducts() {
  productList.innerHTML = "<p class='text-muted'>Loading products...</p>";
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3",
    );
    const products = await response.json(); // array , 3

    if (!response.ok) {
      throw new Error(`  HTTP STATUS CODE : ${response.status}`);
    }

    productList.innerHTML = products
      .map(
        (product) => `<div class="product">
    <h3>${product.title}</h3>
    <p>${product.body}</p>
  </div>`,
      )
      .join("");
  } catch (error) {
    productList.innerHTML = `<p class="text-danger">Failed to load the products: ${error.message}</p>`;
  }
}

loadButton.addEventListener("click", loadProducts);

feedbackForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userName = document.querySelector("#name").value.trim();
  const userMessage = document.querySelector("#message").value.trim();

  result.innerHTML = "<p class='text-muted'>sending user feedback...</p>";

  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: userName,
        message: userMessage,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!resp.ok) {
      throw new Error(`  HTTP STATUS CODE : ${resp.status}`);
    }
    const savedFeedback = await resp.json();
    console.log("RES :", resp);

    console.log("saved", savedFeedback);

    result.innerHTML = `<div>
      <p>Thank you ${userName}!!!</p>
      </div>`;
  } catch (error) {
    result.innerHTML = `<p class="text-danger">Failed to send the feedback: ${error.message}</p>`;
  }
});

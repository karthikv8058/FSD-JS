import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 17",
      price: 135000,
      inStock: true,
    },
    {
      id: 2,
      name: "iPhone 15",
      price: 65000,
      inStock: true,
    },
    {
      id: 3,
      name: "iPhone 12 mini",
      price: 45000,
      inStock: false,
    },
  ];

  return (
    <>
      <Navbar />
      <h1>Welcome to e-shop</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </>
  );
}

export default App;

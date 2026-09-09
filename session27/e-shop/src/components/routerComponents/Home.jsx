import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="mt-5">
      <div>
        <h1>🏠 Welcome to Mini E Shop</h1>

        <p>Learn React Router with one simple application.</p>

        <Link to="/products">🛍️ View Products</Link>
      </div>
    </Container>
  );
};

export default Home;

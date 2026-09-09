import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("params :", id);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    // Example: fetch product from fakestoreapi. Replace URL with your real API if needed.
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load product");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message || "Unknown error"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading product...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found.</div>;

  return (
    <div style={{ padding: 20 }}>
      <Link to="/products">← Back to products</Link>
      <button onClick={() => navigate("/")}>Back to home</button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>{product.title}</h1>
      <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: 300, height: 300, objectFit: "contain" }}
        />
        <div>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>{product.description}</p>
          <p>
            <strong>Rating:</strong> {product.rating?.rate} (
            {product.rating?.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

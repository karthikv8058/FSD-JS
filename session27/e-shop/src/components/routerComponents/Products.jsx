import React from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";

const products = [
  {
    id: 2,
    name: "Classic Running Shoes",
    price: 1899,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Premium Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Minimalist Watch",
    price: 2199,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
  },
];

function Products() {
  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">Products</h2>

      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Subtitle className="mb-2 text-muted">
                  {product.category}
                </Card.Subtitle>
                <Card.Title>{product.name}</Card.Title>

                <div className="mt-auto">
                  <h5 className="text-primary mb-3">₹{product.price}</h5>
                  <Nav.Link
                    variant="primary"
                    className="w-100"
                    href={`/products/${product.id}`}
                  >
                    View {product.category}
                  </Nav.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;

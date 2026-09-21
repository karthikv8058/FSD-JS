import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";

import { fetchProducts } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();

  //inline selector
  const { loading, items, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading)
    return (
      <div>
        <center>
          <h2>Loading...</h2>
        </center>
      </div>
    );
  if (error)
    return (
      <div>
        <h2>Error : {error}</h2>
      </div>
    );

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">Products</h2>

      <Row className="g-4">
        {items.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.title}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Subtitle className="mb-2 text-muted">
                  {product.category}
                </Card.Subtitle>
                <Card.Title>{product.title}</Card.Title>

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

import { Container, Row, Col } from "react-bootstrap";

import products from "./products";

import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <Container className="mb-5">
      <h2 className="mb-4">Products</h2>

      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;

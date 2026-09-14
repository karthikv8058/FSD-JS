import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Badge,
} from "react-bootstrap";
import useDebounce from "../../customHooks/useDebounce";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import useFetch from "../../customHooks/useFetch";
import { useWindowSize } from "../../customHooks/useWindowSize";
import { useForm } from "../../customHooks/useForm";

function ProductAddSearch() {
  // -------------------------
  // 1. SEARCH STATE
  // -------------------------

  const [query, setQuery] = useState("");

  // useDebounce
  const debouncedQuery = useDebounce(query, 500);

  // -------------------------
  // 2. LOCAL STORAGE
  // -------------------------

  const [lastSearch, setLastSearch] = useLocalStorage("lastSearch", "");

  // -------------------------
  // 3. WINDOW SIZE
  // -------------------------

  const width = useWindowSize();

  const isMobile = width < 768;

  // -------------------------
  // 4. FETCH PRODUCTS
  // -------------------------

  const url = debouncedQuery
    ? `https://dummyjson.com/products/search?q=${debouncedQuery}`
    : "https://dummyjson.com/products";

  const { data: products, loading, error } = useFetch(url);

  // -------------------------
  // 5. FORM VALIDATION
  // -------------------------

  function validateProduct(data) {
    const errors = {};

    if (!data.title) {
      errors.title = "Title is required";
    }

    if (!data.price) {
      errors.price = "Price is required";
    }

    return errors;
  }

  // -------------------------
  // 6. useForm
  // -------------------------

  const { formData, errors, isSubmitting, handleChange, handleSubmit, reset } =
    useForm(
      {
        title: "",
        price: "",
      },
      validateProduct,
    );

  // -------------------------
  // SEARCH HANDLER
  // -------------------------

  function handleSearch(e) {
    const value = e.target.value;

    setQuery(value);
    setLastSearch(value);
  }

  // -------------------------
  // FORM SUBMIT
  // -------------------------

  async function onSubmit(data) {
    console.log("Product submitted:", data);
    alert(`Product Added: ${data.title}`);
    reset();
  }

  // -------------------------
  // UI
  // -------------------------

  return (
    <Container className="py-4">
      <Card className="shadow-sm border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h1 className="mb-0">Product Management</h1>
            <Badge bg={isMobile ? "secondary" : "primary"} className="fs-6">
              {isMobile ? "Mobile" : "Desktop"}
            </Badge>
          </div>

          <Row className="g-4">
            <Col lg={7}>
              <Card className="h-100 border-0 bg-light-subtle">
                <Card.Body>
                  <h2 className="h4 mb-3">Search Products</h2>

                  <Form.Control
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search products..."
                    className="mb-3"
                  />

                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                    <small className="text-muted">
                      Last Search: {lastSearch || "None"}
                    </small>
                    {query !== debouncedQuery && (
                      <Badge bg="warning" text="dark">
                        Typing...
                      </Badge>
                    )}
                  </div>

                  {loading && <Alert variant="info">Loading products...</Alert>}
                  {error && <Alert variant="danger">{error}</Alert>}

                  <ListGroup>
                    {products?.map((product) => (
                      <ListGroup.Item
                        key={product.id}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span>{product.title}</span>
                        <strong>${product.price}</strong>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={5}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <h2 className="h4 mb-3">Add Product</h2>

                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(onSubmit);
                    }}
                  >
                    <Form.Group className="mb-3">
                      <Form.Label>Product title</Form.Label>
                      <Form.Control
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter product title"
                        isInvalid={!!errors.title}
                      />
                      {errors.title && (
                        <Form.Control.Feedback type="invalid">
                          {errors.title}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Product price</Form.Label>
                      <Form.Control
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter product price"
                        isInvalid={!!errors.price}
                      />
                      {errors.price && (
                        <Form.Control.Feedback type="invalid">
                          {errors.price}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>

                    <div className="d-flex gap-2">
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Saving..." : "Add Product"}
                      </Button>

                      <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={reset}
                      >
                        Reset
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductAddSearch;

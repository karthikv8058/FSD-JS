import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Pro :", product);

    dispatch(addItem(product));
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={product.image} alt={product.title} />

      <Card.Body className="d-flex flex-column">
        <Badge bg="secondary" className="align-self-start mb-2">
          {product.category}
        </Badge>

        <Card.Title>{product.title}</Card.Title>

        <Card.Text className="fs-5 fw-bold">
          ₹{product.price.toLocaleString("en-IN")}
        </Card.Text>

        <Button variant="primary" className="mt-auto" onClick={handleAddToCart}>
          🛒 Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

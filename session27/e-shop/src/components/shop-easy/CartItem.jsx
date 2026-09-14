import { Card, Button, ButtonGroup } from "react-bootstrap";

function CartItem({ item }) {
  const increaseQuantity = () => {};

  const decreaseQuantity = () => {};

  const handleRemove = () => {};

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h5>{item.title}</h5>

            <p className="mb-2">₹{item.price.toLocaleString("en-IN")}</p>

            <ButtonGroup>
              <Button variant="outline-secondary" onClick={decreaseQuantity}>
                -
              </Button>

              <Button variant="outline-secondary" disabled>
                {item.quantity}
              </Button>

              <Button variant="outline-secondary" onClick={increaseQuantity}>
                +
              </Button>
            </ButtonGroup>
          </div>

          <div className="text-end">
            <div className="fw-bold mb-3">
              ₹{(item.price * item.quantity).toLocaleString("en-IN")}
            </div>

            <Button variant="danger" size="sm" onClick={handleRemove}>
              Remove
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CartItem;

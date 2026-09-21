import { Container, Alert, Button, Card } from "react-bootstrap";

import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  cartTotal,
  clearCart,
  selectCartCount,
  selectCartItems,
} from "../../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  //named selector
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotalAmount = useSelector(cartTotal);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  //derived selector
  // const filteredItems = cartItem.filter(.....)

  return (
    <Container className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Shopping Cart</h2>

        {cartItems.length > 0 && (
          <Button variant="outline-danger" onClick={handleClearCart}>
            Clear Cart
          </Button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <Alert variant="info">Your cart is empty.</Alert>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <Card className="shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <span>Total Items</span>

                <strong>{cartCount}</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between fs-4">
                <strong>Total</strong>

                <strong>₹{cartTotalAmount.toLocaleString("en-IN")}</strong>
              </div>

              <Button variant="success" className="w-100 mt-3">
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
}

export default Cart;

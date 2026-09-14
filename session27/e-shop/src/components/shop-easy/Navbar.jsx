import { Navbar as BootstrapNavbar, Container, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../store/cartSlice";

function Navbar() {
  const cartCount = useSelector(selectCartCount);
  return (
    <BootstrapNavbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <BootstrapNavbar.Brand>🛒 ShopEasy</BootstrapNavbar.Brand>

        <div className="text-white">
          Cart <Badge bg="danger">{cartCount}</Badge>
        </div>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function MovieCard({ handleBookMovie, id, name, img }) {
  return (
    <Col key={id}>
      <Card>
        <Card.Img variant="top" src={img.medium} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text></Card.Text>
          <Button
            variant="danger"
            onClick={() => handleBookMovie({ id, name, image: img })}
          >
            Book now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;

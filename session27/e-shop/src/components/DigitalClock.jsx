import { useEffect, useState } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";

const formatTwoDigits = (value) => value.toString().padStart(2, "0");

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const meridiem = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  const timeBlocks = [
    {
      label: "Hours",
      value: formatTwoDigits(displayHours),
      color: "#7dd3fc",
      glow: "rgba(125, 211, 252, 0.35)",
    },
    {
      label: "Minutes",
      value: formatTwoDigits(minutes),
      color: "#a78bfa",
      glow: "rgba(167, 139, 250, 0.35)",
    },
    {
      label: "Seconds",
      value: formatTwoDigits(seconds),
      color: "#f9a8d4",
      glow: "rgba(249, 168, 212, 0.35)",
    },
  ];

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 py-5">
      <Card
        className="shadow-lg border-0"
        style={{
          width: "min(90vw, 650px)",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #334155 100%)",
          borderRadius: "28px",
          color: "#f8fafc",
        }}
      >
        <Card.Body className="p-4 p-md-5">
          <div className="text-center mb-4">
            <Badge
              bg="light"
              text="dark"
              className="px-3 py-2 rounded-pill fs-6"
            >
              Live Digital Clock
            </Badge>
          </div>

          <Row className="g-3 text-center align-items-stretch">
            {timeBlocks.map((item) => (
              <Col key={item.label} xs={12} sm={4}>
                <div
                  className="rounded-4 p-3 h-100"
                  style={{
                    background: "rgba(148, 163, 184, 0.12)",
                    border: "1px solid rgba(148, 163, 184, 0.2)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="text-uppercase small text-light-emphasis mb-2">
                    {item.label}
                  </div>
                  <div
                    className="display-4 fw-bold"
                    style={{
                      letterSpacing: "0.08em",
                      color: item.color,
                      textShadow: `0 0 18px ${item.glow}`,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Badge
              bg="success"
              className="px-4 py-3 rounded-pill fs-5"
              style={{
                minWidth: "110px",
                boxShadow: "0 0 18px rgba(34, 197, 94, 0.45)",
              }}
            >
              {meridiem}
            </Badge>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DigitalClock;

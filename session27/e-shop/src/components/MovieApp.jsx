import { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";
import SearchMovie from "./SearchMovie";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import useFetch from "../customHooks/useFetch";

function MovieApp() {
  // =========================
  // Movie states
  // =========================

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchedMovies, setSearchedMovies] = useState([]);

  // =========================
  // Booking states
  // =========================

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [bookingData, setBookingData] = useState({
    movie: "",
    date: "",
    time: "",
    seatType: "",
    tickets: "",
    snacks: false,
    request: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  // const [errorApi, setApiError] = useState(null);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const { data, error: apiError, loading } = useFetch("/shows");

  // =========================
  // Fetch movies
  // =========================

  console.log("Data from UseFetch >>>>>>", data);

  useEffect(() => {
    setMovies(data);
    setSearchedMovies(data);
  }, [data]);

  // =========================
  // Search movies
  // =========================

  const handleMovieSearch = (movie) => {
    const filteredMovies = movies.filter((item) =>
      item.name.toLowerCase().includes(movie.toLowerCase()),
    );

    setSearchedMovies(filteredMovies);
  };

  const handleBookMovie = (movie) => {
    setSelectedMovie(movie);
    setBookingData({
      movie: movie.name,
      date: "",
      time: "",
      seatType: "",
      tickets: "",
      snacks: false,
      request: "",
      agree: false,
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    console.log("value, name, type, checked:", value, name, type, checked);

    setBookingData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClodeModal = () => {
    setShowModal(false);
    setBookingSuccess(false);
    setSelectedMovie(null);
  };

  const validate = () => {
    const formErrors = {};
    if (!bookingData.date) {
      formErrors.date = "Please select a date";
    }
    if (!bookingData.time) {
      formErrors.time = "Please select a time";
    }
    if (!bookingData.seatType) {
      formErrors.seatType = "Please select a seat type";
    }
    if (!bookingData.tickets) {
      formErrors.tickets = "Please select tickets";
    }
    if (!bookingData.agree) {
      formErrors.agree = "Please accept terms and conditions!";
    }

    return formErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    console.log("Errors :", errors);
    setErrors(errors);
    // if errors are there -> fn exit,
    if (Object.keys(errors).length > 0) {
      return;
    }
    setBookingSuccess(true);
  };

  // =========================
  // Loading
  // =========================

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p className="mt-3">Loading movies...</p>
      </Container>
    );
  }

  // =========================
  // Error
  // =========================

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Error loading movies: {error}</Alert>
      </Container>
    );
  }

  // =========================
  // UI
  // =========================

  console.log("bookingData :", bookingData, errors);

  return (
    <>
      <Container className="py-4">
        <h1 className="text-center mb-4">🎬 Movie Booking App</h1>

        {/* Search */}

        <SearchMovie handleMovieSearch={() => {}} />

        {/* Movie List */}

        <Row xs={1} sm={2} md={4} lg={6} className="g-4 mt-3">
          {searchedMovies.map((movie) => {
            const { id, name, image } = movie;

            return (
              <MovieCard
                key={id}
                id={id}
                name={name}
                img={image}
                handleBookMovie={handleBookMovie}
              />
            );
          })}
        </Row>

        {/* No search result */}

        {searchedMovies.length === 0 && (
          <Alert variant="warning" className="mt-4 text-center">
            No movies found.
          </Alert>
        )}
      </Container>

      {/* =========================
          BOOKING MODAL
          ========================= */}

      <Modal show={showModal} onHide={handleClodeModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>🎟️ Book Movie Ticket</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* =========================
              SUCCESS MESSAGE
              ========================= */}

          {bookingSuccess ? (
            <div className="text-center py-4">
              <div style={{ fontSize: "60px" }}>🎉</div>

              <h3 className="text-success">Booking Confirmed!</h3>

              <p className="mt-3">
                Your tickets have been successfully booked.
              </p>

              <hr />

              <div className="text-start">
                <p>
                  <strong>Movie:</strong> {bookingData.movie}
                </p>

                <p>
                  <strong>Date:</strong> {bookingData.date}
                </p>

                <p>
                  <strong>Time:</strong> {bookingData.time}
                </p>

                <p>
                  <strong>Seat:</strong> {bookingData.seatType}
                </p>

                <p>
                  <strong>Tickets:</strong> {bookingData.tickets}
                </p>

                <p>
                  <strong>Snacks:</strong>{" "}
                  {bookingData.snacks ? "Yes 🍿" : "No"}
                </p>
              </div>

              <Button variant="primary" onClick={() => handleClodeModal()}>
                Done
              </Button>
            </div>
          ) : (
            /* =========================
               BOOKING FORM
               ========================= */

            <Form onSubmit={handleFormSubmit} noValidate>
              {/* Movie */}

              <Form.Group className="mb-3">
                <Form.Label>Movie</Form.Label>

                <Form.Control
                  type="text"
                  name="movie"
                  value={bookingData.movie}
                  readOnly
                />
              </Form.Group>

              {/* Date */}

              <Form.Group className="mb-3">
                <Form.Label>📅 Select Date</Form.Label>

                <Form.Control
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={(e) => handleChange(e)}
                  onBlur={() => {}}
                  isInvalid={touched.date && !!errors.date}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Show Time */}

              <Form.Group className="mb-3">
                <Form.Label>🕐 Show Time</Form.Label>

                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="10:00 AM"
                    name="time"
                    value="10:00 AM"
                    checked={bookingData.time === "10:00 AM"}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => {}}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    label="2:30 PM"
                    name="time"
                    value="2:30 PM"
                    checked={bookingData.time === "2:30 PM"}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => {}}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    label="6:30 PM"
                    name="time"
                    value="6:30 PM"
                    checked={bookingData.time === "6:30 PM"}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => {}}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    label="9:30 PM"
                    name="time"
                    value="9:30 PM"
                    checked={bookingData.time === "9:30 PM"}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => {}}
                  />
                </div>

                {touched.time && errors.time && (
                  <div className="text-danger small mt-2">{errors.time}</div>
                )}
              </Form.Group>

              {/* Seat Type */}

              <Form.Group className="mb-3">
                <Form.Label>💺 Seat Type</Form.Label>

                <div>
                  <Form.Check
                    type="radio"
                    label="Regular - ₹150"
                    name="seatType"
                    value="Regular"
                    checked={bookingData.seatType === "Regular"}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => {}}
                  />

                  <Form.Check
                    type="radio"
                    label="Premium - ₹250"
                    name="seatType"
                    value="Premium"
                    checked={bookingData.seatType === "Premium"}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => {}}
                  />

                  <Form.Check
                    type="radio"
                    label="Recliner - ₹400"
                    name="seatType"
                    value="Recliner"
                    checked={bookingData.seatType === "Recliner"}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => {}}
                  />
                </div>

                {touched.seatType && errors.seatType && (
                  <div className="text-danger small mt-2">
                    {errors.seatType}
                  </div>
                )}
              </Form.Group>

              {/* Number of Tickets */}

              <Form.Group className="mb-3">
                <Form.Label>🎫 Number of Tickets</Form.Label>

                <Form.Select
                  name="tickets"
                  value={bookingData.tickets}
                  onChange={(e) => handleChange(e)}
                  onBlur={() => {}}
                  isInvalid={touched.tickets && !!errors.tickets}
                >
                  <option value="">Select tickets</option>
                  <option value="1">1 Ticket</option>
                  <option value="2">2 Tickets</option>
                  <option value="3">3 Tickets</option>
                  <option value="4">4 Tickets</option>
                  <option value="5">5 Tickets</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.tickets}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Snacks */}

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="🍿 Add popcorn & snacks"
                  name="snacks"
                  checked={bookingData.snacks}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              {/* Special Request */}

              <Form.Group className="mb-3">
                <Form.Label>📝 Special Request</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  name="request"
                  value={bookingData.request}
                  onChange={(e) => handleChange(e)}
                  placeholder="Any special request?"
                />
              </Form.Group>

              {/* Terms */}

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="I agree to the terms and conditions"
                  name="agree"
                  checked={bookingData.agree}
                  onChange={(e) => handleChange(e)}
                  onBlur={() => {}}
                  isInvalid={touched.agree && !!errors.agree}
                  feedback={errors.agree}
                  feedbackType="invalid"
                />
              </Form.Group>

              {/* Server Error */}

              {serverError && <Alert variant="danger">{serverError}</Alert>}

              {/* Buttons */}

              <div className="d-flex justify-content-end gap-2">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={handleClodeModal}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={!bookingData.agree}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner size="sm" animation="border" className="me-2" />
                      Booking...
                    </>
                  ) : (
                    "🎟️ Confirm Booking"
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieApp;

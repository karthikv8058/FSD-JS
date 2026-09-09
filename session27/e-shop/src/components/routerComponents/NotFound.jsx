import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "4rem", margin: 0 }}>404</h1>
      <h2 style={{ margin: "0.5rem 0" }}>Page Not Found</h2>
      <p style={{ marginBottom: "1rem" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          background: "#007bff",
          color: "#fff",
          padding: "0.75rem 1.25rem",
          borderRadius: "6px",
          fontWeight: 600,
        }}
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;

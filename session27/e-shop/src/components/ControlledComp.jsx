import { useState } from "react";

import Form from "react-bootstrap/Form";
// import CountApp from "./components/CounterApp";

// import "./App.css";

function ControlledComp() {
  const [username, setUsername] = useState("");

  return (
    <>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      <p>User name : {username}</p>
    </>
  );
}

export default ControlledComp;

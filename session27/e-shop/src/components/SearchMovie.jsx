import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";

function SearchMovie({ handleMovieSearch, searchResults }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value) => {
    setSearch(value);
    handleMovieSearch(value);
  };

  return (
    <>
      <InputGroup className="mb-3 mt-3">
        <Button
          //   onClick={(e) => handleSearchChange(e.target.value)}
          variant="warning"
          id="button-addon1"
        >
          Search
        </Button>
        <Form.Control
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          type="text"
          placeholder="Enter movie's name"
        />
      </InputGroup>
      {search !== "" && searchResults !== 0 ? (
        <Alert variant="info">{`${searchResults} results found`}</Alert>
      ) : (
        <span></span>
      )}
    </>
  );
}

export default SearchMovie;

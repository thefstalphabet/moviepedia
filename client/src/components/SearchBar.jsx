import { useState } from "react";
import styled from "styled-components";

export default function SearchBar(props) {
  // STATES **********
  const [query, setQuery] = useState("");

  // FUNCTIONS **********
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.action(query);
    }
  };
  return (
    <Container>
      <input
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        value={query}
      />
    </Container>
  );
}
// Styling
const Container = styled.div`
  text-align: center;
  input {
    padding: 10px;
    font-size: 16px;
    outline: none;
    width: 50%;
    border: none;
    background-color: var(--dark-color);
    color: var(--white-color);
  }
`;
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  // STATES **********
  const [visibility, setVisibility] = useState(false);

  // FUNCTIONS **********
  const handleClick = () => {
    if (visibility) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };
  const logOut = () => {
    localStorage.removeItem("access token");
    window.location.reload(false);
  };
  return (
    <Container>
      <Link to="/dashboard">
        <h1>MOVIEPEDIA</h1>
      </Link>
      <Links state={visibility}>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={logOut}>Log Out</button>
        </li>
      </Links>
      {visibility ? (
        <img
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          onClick={handleClick}
        />
      ) : (
        <img
          src="/assets/icons/menu-icon.svg"
          alt="menu-icon"
          onClick={handleClick}
        />
      )}
    </Container>
  );
}
// Styling
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2.5;
  align-items: center;
  background-color: var(--dark-color);
  color: var(--white-color);
  padding: 0 10px 0 10px;
  h1 {
    font-size: 20px;
    font-weight: 700;
    color: var(--white-color);
    letter-spacing: 2px;
  }
  img {
    width: 22px;
    display: none;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    img {
      display: block;
      z-index: 2;
    }
  }
`;
const Links = styled.div`
  display: flex;
  a {
    color: var(--black-color);
    font-size: 16px;
    font-weight: 600;
  }
  li {
    list-style: none;
    margin-left: 20px;
  }
  button {
    font-weight: 600;
    font-size: 16px;
    padding: 4px 10px;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    color: var(--white-color);
    background-color: var(--main-color);
  }
  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    height: 40vh;
    width: 100%;
    background-color: var(--dark-color);
    color: var(--white-color);
    text-align: start;
    padding: 15px 10px;
    transform: ${({ state }) =>
      state ? "translateY(0px)" : "translateY(-700px)"};
    z-index: 1;
    transition: 0.3s ease-out;
    li {
      margin: 0;
    }
  }
`;

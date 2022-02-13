import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <Container>
      <Header>
        <h1>MOVIEPEDIA</h1>
        <Link to="/register">
          <button>Signup</button>
        </Link>
      </Header>
      <Body>
        <Left>
          <h2>
            Welcome to the World <br /> of Moviepedia
          </h2>
        </Left>
        <Right>
          <img src="assets/images/studio.svg" alt="studio" />
        </Right>
      </Body>
    </Container>
  );
}
// Styling
const Container = styled.div`
  padding: 10px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  h1 {
    font-size: 20px;
    font-weight: 700;
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
`;
const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  text-align: center;
  align-items: center;
  margin-top: 100px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Left = styled.div`
  h2 {
    font-size: 30px;
    font-weight: 700;
  }
`;
const Right = styled.div`
  img {
    width: 60%;
    transform: rotate(20deg);
  }
`;

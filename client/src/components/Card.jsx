import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card(props) {
  return (
    <Container>
      <Header>
        <Ability
          onClick={() => {
            props.action(props.element);
          }}
        >
          <img src="/assets/icons/star-icon.svg" alt="heart-icon" />
        </Ability>
        <Link to={`/movie/${props.element.imdbID}`}>
          {props.element.Poster === "N/A" ? (
            <img src="/assets/images/poster.png" alt="poster" />
          ) : (
            <img src={props.element.Poster} alt="poster" />
          )}
        </Link>
      </Header>
      <Body>
        <h2>{props.element.Title}</h2>
      </Body>
    </Container>
  );
}
// Styling
const Container = styled.div``;
const Header = styled.div`
  position: relative;
  text-align: left;
  img {
    width: 100%;
  }
`;
const Body = styled.div`
  text-align: left;
  color: var(--dark-color);
  h2,
  p {
    font-size: 16px;
    font-weight: 600;
  }
`;
const Ability = styled.div`
  background-color: var(--main-color);
  opacity: 0.9;
  display: inline-block;
  padding-top: 4px;
  padding-left: 5px;
  padding-right: 5px;
  position: absolute;
  img {
    width: 20px;
    cursor: pointer;
  }
`;

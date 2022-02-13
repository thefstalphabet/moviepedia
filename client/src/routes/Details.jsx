import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {Nav, Loader} from "../components";

export default function Details() {
  const { imdbID } = useParams();

  // STATES **********
  const [details, setDetails] = useState();
  console.log(details); // for debugging

  // FUNCTIONS **********
  const getDetails = async (imdbID) => {
    const URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&I=${imdbID}&Plot=full`;
    const request = await fetch(URL, {
      method: "GET",
    });
    const data = await request.json();
    setDetails(data);
  };
  useEffect(() => {
    getDetails(imdbID);
  }, []);

  return (
    <Container>
      <Header>
        <Nav />
      </Header>
      <Body>
        {details ? (
          <Items>
            <Left>
              {details.Poster === "N/A" ? (
                <img src="/assets/images/poster.png" alt="poster" />
              ) : (
                <img src={details.Poster} alt="poster" />
              )}
            </Left>
            <Right>
              <h2>{details.Title}</h2>
              <div>
                <p>
                  <span>Type:</span> {details.Type}
                </p>
                <p>
                  <span>Year:</span> {details.Year}
                </p>
                <p>
                  <span>Run Time:</span> {details.Runtime}
                </p>
                <p>
                  <span>Released:</span> {details.Released}
                </p>
              </div>
              <p>
                <span>Language:</span> {details.Language}
              </p>
              <p>
                <span>Box Office:</span> {details.BoxOffice}
              </p>
              <p>
                <span>Actors:</span> {details.Actors}
              </p>
              <p>
                <span>Genre:</span> {details.Genre}
              </p>
              <p>
                <span>Awards:</span> {details.Awards}
              </p>
              <p>
                <span>Brief:</span> {details.Plot}
              </p>
              <p>
                <span>Writers:</span> {details.Writer}
              </p>
              <p>
                <span>Directors:</span> {details.Director}
              </p>
              <p>
                <span>Rated:</span> {details.Rated}
              </p>
            </Right>
          </Items>
        ) : (
          <Loader />
        )}
      </Body>
    </Container>
  );
}
// Styling
const Container = styled.div`
  padding: 10px;
  line-height: 3;
`;
const Header = styled.div``;
const Body = styled.div`
  margin-top: 10px;
`;
const Items = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 2fr;
  text-align: start;
  @media (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;
const Left = styled.div`
  img {
    width: 100%;
  }
`;
const Right = styled.div`
  text-align: left;
  line-height: 2;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  span {
    font-weight: 700;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }
`;

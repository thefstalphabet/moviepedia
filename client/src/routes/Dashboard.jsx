import styled from "styled-components";
import { SearchBar, Nav, Listing } from "../components";
import { useDispatch } from "react-redux";
import { setMovies } from "../redux/reducers/moviesReducer";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();

  // FUNCTIONS **********
  const getMovies = async (query) => {
    const URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`;
    const response = await fetch(URL, {
      method: "GET",
    });
    response.json().then((data) => {
      dispatch(setMovies(data));
    });
  };

  return (
    <>
      {!localStorage.getItem("access token") && <Navigate to="/login" />}
      <Container>
        <Header>
          <Nav />
          <SearchBar action={getMovies} />
        </Header>
        <Body>
          <Listing />
        </Body>
      </Container>
    </>
  );
}
// Styling
const Container = styled.div``;
const Header = styled.div`
  background-image: url(${"/assets/images/banner.svg"});
  padding: 10px;
  text-align: center;
  line-height: 25;
  h2 {
    color: var(--white-color);
  }
`;
const Body = styled.div`
  margin-top: 10px;
  padding: 0 10px 10px 10px;
`;

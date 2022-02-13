import styled from "styled-components";
import { Card, Filter } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/reducers/moviesReducer";
import { addFavorites } from "../redux/reducers/favoritesReducer";
import { getType } from "../redux/reducers/filterReducer";

export default function Listing(props) {
  const dispatch = useDispatch(addFavorites);
  const searchResult = useSelector(getMovies);
  const filterType = useSelector(getType);

  // FUNCTIONS **********
  const handleClick = async (item) => {
    const URL =
      process.env.NODE_ENV === "development"
        ? `${process.env.REACT_APP_DEV_API_URL}/api/movie`
        : `${process.env.REACT_APP_PRO_API_URL}/api/movie`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access token")}`,
      },
      body: JSON.stringify({
        item: item,
      }),
    });
    response.json().then((data) => {
      if (data.item) {
        dispatch(addFavorites(item));
        alert("Sucessfylly added");
      }
    });
  };
  return (
    <Container>
      {searchResult.Response === "True" ? (
        <>
          <Heading>
            <h1>Searched result</h1>
            <Filter />
          </Heading>
          <Items>
            {searchResult.Search.filter((element) => {
              if (element.Type === filterType) {
                return element;
              } else if (filterType === "") {
                return element;
              }
              return 0;
            }).map((element) => {
              return (
                <Card
                  key={element.imdbID}
                  element={element}
                  action={handleClick}
                />
              );
            })}
          </Items>
        </>
      ) : (
        <h1>{searchResult.Error}</h1>
      )}
    </Container>
  );
}
// Styling
const Container = styled.div`
  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  text-align: center;
  margin-top: 10px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

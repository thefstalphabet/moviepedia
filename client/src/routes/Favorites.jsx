import styled from "styled-components";
import { Nav, Card } from "../components";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites, getFavorites } from "../redux/reducers/favoritesReducer";

export default function Enter() {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  // FUNCTION **********
  const deleteFavorites = async (item) => {
    const URL =
      process.env.NODE_ENV === "development"
        ? `${process.env.REACT_APP_DEV_API_URL}/api/movie`
        : `${process.env.REACT_APP_PRO_API_URL}/api/movie`;
    const response = await fetch(URL, {
      method: "DELETE",
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
        const newItem = favorites.filter(
          (favorites) => favorites.imdbID !== data.item.imdbID
        );
        dispatch(setFavorites(newItem));
        alert("Sucessfylly deleted");
      }
    });
  };
  return (
    <>
      {!localStorage.getItem("access token") && <Navigate to="/login" />}
      <Container>
        <Header>
          <Nav />
        </Header>
        <Body>
          {favorites.length << 0 ? (
            <>
              <h1>Currently, you have {favorites.length} items</h1>
              <Items>
                {favorites.map((element) => {
                  return (
                    <Card
                      key={element.imdbID}
                      element={element}
                      action={deleteFavorites}
                    />
                  );
                })}
              </Items>
            </>
          ) : (
            <>
              <span>¯\_(ツ)_/¯</span>
              <h1>Currently, you don't have any favorites</h1>
            </>
          )}
        </Body>
      </Container>
    </>
  );
}
// Styling
const Container = styled.div`
  padding: 10px;
`;
const Header = styled.div``;
const Body = styled.div`
  margin-top: 10px;
  h1,
  span {
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

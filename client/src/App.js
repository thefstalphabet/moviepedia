import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Register,
  Enter,
  Dashboard,
  Profile,
  Favorites,
  Page404,
  Hero,
  Details,
} from "./routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/reducers/userReducer";
import { setFavorites } from "./redux/reducers/favoritesReducer";

export default function App() {
  const dispatch = useDispatch();

  // FUNCTIONS **********
  const getUserDetails = async () => {
    const URL =
      process.env.NODE_ENV === "development"
        ? `${process.env.REACT_APP_DEV_API_URL}/api/me`
        : `${process.env.REACT_APP_PRO_API_URL}/api/me`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access token")}`,
      },
    });
    response.json().then((data) => {
      dispatch(setUser(data));
      dispatch(setFavorites(data.favorites));
    });
  };
  useEffect(() => {
    getUserDetails();
  });
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Enter />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:imdbID" element={<Details />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div``;

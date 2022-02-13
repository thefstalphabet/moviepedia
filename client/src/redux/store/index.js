import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import filterReducer from "../reducers/filterReducer";
import moviesReducer from "../reducers/moviesReducer";
import userReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
  },
});

export default store;

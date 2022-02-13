import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
    },
    addFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
  },
});
export const { setFavorites, addFavorites } = favoritesSlice.actions;
export const getFavorites = (state) => state.favorites.favorites;
export default favoritesSlice.reducer;

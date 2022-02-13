import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});
export const { setMovies } = moviesSlice.actions;
export const getMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;

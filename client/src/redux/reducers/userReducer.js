import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export const getUser = (state) => state.user.user;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    active: 1,
    type: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActive: (state, { payload }) => {
      state.filter.active = payload;
    },
    setType: (state, { payload }) => {
      state.filter.type = payload;
    },
  },
});
export const { setActive, setType } = filterSlice.actions;
export const getActive = (state) => state.filter.filter.active;
export const getType = (state) => state.filter.filter.type;
export default filterSlice.reducer;

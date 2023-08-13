import { createSlice } from "@reduxjs/toolkit";

const cartTogglerSlice = createSlice({
  name: "cartToggler",
  initialState: false,
  reducers: {
    toggleCart: (state) => !state,
  },
});

export const cartTogglerActions = cartTogglerSlice.actions;

export default cartTogglerSlice.reducer;

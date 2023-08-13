import { configureStore } from "@reduxjs/toolkit";

import cartTogglerReducer from "./cart-toggler";

const store = configureStore({
  reducer: {
    cartToggler: cartTogglerReducer,
  },
});

export default store;

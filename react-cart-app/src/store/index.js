import { configureStore } from "@reduxjs/toolkit";

import uiSliceReducer from "./ui-slice";
import CartSliceReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    cart: CartSliceReducer,
  },
});

export default store;

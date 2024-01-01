import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/products/productSlice";
import filterSlice from "./features/products/filterSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    filter: filterSlice,
  },
});

export default store;

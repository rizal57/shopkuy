import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItems: [],
  categories: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getProductsSuccess: (state, action) => {
      state.productItems = action.payload;
      state.isLoading = false;
    },
    getProductsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  getCategories,
} = productSlice.actions;

export default productSlice.reducer;

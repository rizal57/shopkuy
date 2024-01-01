import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  search: "",
  sortBy: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setCategory, setSearch, setSortBy } = filterSlice.actions;

export default filterSlice.reducer;

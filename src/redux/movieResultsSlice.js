import { createSlice } from "@reduxjs/toolkit";

export const movieResultsSlice = createSlice({
  name: "movies",
  initialState: {
    movieResults: [],
  },
  reducers: {
    update: (state, action) => {
      state.movieResults = action.payload;
    },
  },
});

export const { update } = movieResultsSlice.actions;
export default movieResultsSlice.reducer;

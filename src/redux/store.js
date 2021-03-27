import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import searchStringReducer from "./searchStringSlice";
import movieResultsReducer from "./movieResultsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    search: searchStringReducer,
    movies: movieResultsReducer,
  },
});

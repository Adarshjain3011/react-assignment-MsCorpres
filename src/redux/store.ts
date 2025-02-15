import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "./repoSlice";

const store = configureStore({
  reducer: {
    repos: repoReducer,
  },
});

export default store;

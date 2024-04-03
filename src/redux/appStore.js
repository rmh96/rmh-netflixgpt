import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import profileReducer from "./profileSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    profile: profileReducer,
  },
});

export default appStore;

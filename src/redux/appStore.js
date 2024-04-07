import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import profileReducer from "./profileSlice";
import searchReducer from "./searchSlice";
import appConfigReducer from "./appConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    profile: profileReducer,
    search: searchReducer,
    appConfig: appConfigReducer,
  },
});

export default appStore;

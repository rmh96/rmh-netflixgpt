import { createSlice } from "@reduxjs/toolkit";

const searchReducers = createSlice({
  name: "search",
  initialState: {
    gptSearchToggle: false,
    movieNames: null,
    movieList: null,
    errorDurningSearch: false,
  },
  reducers: {
    setGptSearch: (state, action) => {
      state.gptSearchToggle = action.payload
        ? action.payload
        : !state.gptSearchToggle;
      state.movieNames = null;
      state.movieList = null;
      state.errorDurningSearch = false;
    },
    addMovieList: (state, action) => {
      state.errorDurningSearch = false;
      const { movieNames, movieDetails } = action.payload;
      state.movieNames = movieNames;
      state.movieList = movieDetails;
    },
    errorHappenedInSearchAPI: (state) => {
      state.errorDurningSearch = true;
    },
  },
});

export const { setGptSearch, addMovieList, errorHappenedInSearchAPI } =
  searchReducers.actions;
export default searchReducers.reducer;

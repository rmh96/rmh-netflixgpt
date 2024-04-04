import { createSlice } from "@reduxjs/toolkit";

const movieReducer = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    myListMovies: null,
    upcomingMovies: null,
    videoOfFirstMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMyListMovies: (state, action) => {
      state.myListMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setVideoOfFirstMovie: (state, action) => {
      state.videoOfFirstMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  setVideoOfFirstMovie,
  addPopularMovies,
  addMyListMovies,
  addUpcomingMovies,
} = movieReducer.actions;
export default movieReducer.reducer;

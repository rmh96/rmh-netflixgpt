import { createSlice } from "@reduxjs/toolkit";

const movieReducer = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    videoOfFirstMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setVideoOfFirstMovie: (state, action) => {
      state.videoOfFirstMovie = action.payload;
    },
  },
});

export const { addNowPlayingMovies, setVideoOfFirstMovie } =
  movieReducer.actions;
export default movieReducer.reducer;

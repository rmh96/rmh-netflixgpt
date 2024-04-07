import { createSlice } from "@reduxjs/toolkit";

const searchReducers = createSlice({
  name: "search",
  initialState: {
    gptSearchToggle: false,
  },
  reducers: {
    setGptSearch: (state) => {
      state.gptSearchToggle = !state.gptSearchToggle;
    },
  },
});

export const { setGptSearch } = searchReducers.actions;
export default searchReducers.reducer;

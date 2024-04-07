import { createSlice } from "@reduxjs/toolkit";

const appConfigReducer = createSlice({
  name: "appConfig",
  initialState: {
    lang: "en",
  },
  reducers: {
    setLangForSite: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLangForSite } = appConfigReducer.actions;

export default appConfigReducer.reducer;

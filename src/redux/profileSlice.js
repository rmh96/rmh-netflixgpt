import { createSlice } from "@reduxjs/toolkit";

const profileReducer = createSlice({
  name: "profile",
  initialState: {
    profileSelected: false,
  },
  reducers: {
    setProfileToBrowseFlag: (state, action) => {
      state.profileSelected = action.payload;
    },
    disableProfileToBrowseFlag: (state, action) => {
      state.profileSelected = action.payload;
    },
  },
});

export const { setProfileToBrowseFlag, disableProfileToBrowseFlag } =
  profileReducer.actions;
export default profileReducer.reducer;

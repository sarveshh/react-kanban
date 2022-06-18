import { createSlice } from "@reduxjs/toolkit";

const nightModeSlice = createSlice({
  name: "nightMode",
  initialState: { isLightMode: true },
  reducers: {
    toggleMode: (state) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});
export const nightModeActions = nightModeSlice.actions;

export default nightModeSlice.reducer;

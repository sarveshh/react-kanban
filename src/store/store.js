import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import nightModeReducer from "./slices/nightModeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    nightMode: nightModeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

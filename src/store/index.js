import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import nightModeReducer from "./nightModeSlice";

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

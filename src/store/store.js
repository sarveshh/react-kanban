import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import nightModeReducer from "./slices/nightModeSlice";
import taskManagerReducer from "./slices/taskManagerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    nightMode: nightModeReducer,
    taskManager: taskManagerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

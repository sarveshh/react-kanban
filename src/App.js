import React, { useEffect } from "react";

//Components or Files
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";
import { auth } from "./utils/firebase";
import { setUser } from "./store/slices/authSlice";
import Landing from "./components/Landing/Landing";

//Mui Imports
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

//Dependency Imports
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Page404 from "./components/Page404";
import AppLayout from "./components/AppLayout";

function App() {
  const isLightMode = useSelector((state) => state.nightMode.isLightMode);
  const dispatch = useDispatch();

  useEffect(() => {
    //Setting auth state app wide
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  //MUI Custom theme
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      mode: isLightMode ? "light" : "dark",
      background: {
        boardBg: isLightMode ? "#fafafa" : "#1a1a1a",
      },
      borders: {
        boardBorders: isLightMode ? "#e5e5e5" : "rgba(42,43,56,.5)",
      },
      textColor: {
        boardText: isLightMode ? "black" : "#808080",
      },
    },
    typography: {
      h6: {
        color: isLightMode ? "black" : "black",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Landing />} />
          <Route exact path="/app" element={<AppLayout />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

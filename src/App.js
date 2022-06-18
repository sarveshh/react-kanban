import React, { useEffect } from "react";

//Components or Files
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";
import LoggedInLayout from "./components/LoggedInLayout";
import { auth } from "./firebase";
import { setUser } from "./store/slices/authSlice";

//Mui Imports
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

//Dependency Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
      h6: {
        color: isLightMode ? "black" : "black",
      },
    },
  });

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route exact path="/" element={<LoggedInLayout />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

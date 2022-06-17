import React, { useEffect, useState } from "react";

//Components
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";

//Mui Imports
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoggedInLayout from "./components/LoggedInLayout";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./components/store/actions";

function App() {
  const dispatch = useDispatch();
  const [themeValue, setThemeValue] = useState("light");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      mode: themeValue,
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

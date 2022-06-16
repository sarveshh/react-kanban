import React, { useState, useEffect } from "react";

//Components
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";

//Mui Imports
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoggedInLayout from "./components/LoggedInLayout";

function App() {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
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
            <Route path="/login" element={<SignIn />} />
            <Route exact path="/" element={<LoggedInLayout />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

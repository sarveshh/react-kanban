import React from "react";

import Navbar from "./components/Navbar/Navbar";

//Mui Imports
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;

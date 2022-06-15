import React from "react";

import Navbar from "./components/Navbar/Navbar";

//Mui Imports
import { CssBaseline, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import Board from "./components/Board/Board";

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
        <Box display="flex" justifyContent="space-around">
          <Board />
          <Board />
          <Board />
          <Board />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;

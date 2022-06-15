import React, { useState } from "react";

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

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Card 1",
          description: "This is a card",
          tasks: [],
          tags: [
            {
              text: "Frontend",
              color: "default",
            },
          ],
          date: "2020-01-01",
        },
        {
          id: 2,
          title: "Card 2",
          description: "This is a card 2",
          tasks: [],
          tags: [
            {
              text: "Backend",
              color: "primary",
            },
          ],
          date: "2020-01-01",
        },
      ],
    },
  ]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Box display="flex" justifyContent="space-between">
          {boards.map((board) => (
            <Board key={board.id} board={board} />
          ))}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import Board from "./Board/Board";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const TaskManager = () => {
  const boards = useSelector((state) => state.taskManager.boards);
  useEffect(() => {
    localStorage.setItem("kanban", JSON.stringify(boards));
  }, [boards]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ display: { sm: "flex", xs: "block" }, width: "auto", flex: 4 }}
    >
      {boards.map((board) => (
        <Board key={board.id} board={board} />
      ))}
    </Box>
  );
};

export default TaskManager;

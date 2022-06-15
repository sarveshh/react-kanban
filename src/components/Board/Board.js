import React from "react";
import { Box, Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";

const Board = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h5">Board Title 2</Typography>
        <MdEdit />
        <AiFillDelete />
      </Box>
      <Box className="all_cards">
        <Card />
      </Box>
      <AddCard />
    </Box>
  );
};

export default Board;

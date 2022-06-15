import React from "react";
import { Box, Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import { BoardContainer, BoardHeader, AllCardsContainer } from "./BoardStyles";

const Board = () => {
  return (
    <BoardContainer>
      <BoardHeader>
        <Typography variant="h5">Board Title 2</Typography>
        <MdEdit />
        <AiFillDelete />
      </BoardHeader>
      <AllCardsContainer>
        <Card />
      </AllCardsContainer>
      <AddCard />
    </BoardContainer>
  );
};

export default Board;

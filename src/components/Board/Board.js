import React from "react";
import { Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import { BoardContainer, BoardHeader, AllCardsContainer } from "./BoardStyles";

const Board = (props) => {
  return (
    <BoardContainer>
      <BoardHeader>
        <Typography variant="h5">{props.title}</Typography>
        <MdEdit />
      </BoardHeader>
      <AllCardsContainer>
        <Card />
        <Card />
      </AllCardsContainer>
      <AddCard />
    </BoardContainer>
  );
};

export default Board;

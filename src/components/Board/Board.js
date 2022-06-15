import React from "react";
import { Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import { BoardContainer, BoardHeader, AllCardsContainer } from "./BoardStyles";

const Board = ({ board }) => {
  return (
    <BoardContainer>
      <BoardHeader>
        <Typography variant="h5">
          {board?.title}
          {board?.cards?.length}
        </Typography>
        <MdEdit />
      </BoardHeader>
      <AllCardsContainer>
        {board?.cards?.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </AllCardsContainer>
      <AddCard />
    </BoardContainer>
  );
};

export default Board;

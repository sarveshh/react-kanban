import React from "react";
import { Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import { BoardContainer, BoardHeader, AllCardsContainer } from "./BoardStyles";

const Board = (props) => {
  return (
    <BoardContainer>
      <BoardHeader>
        <Typography variant="h5">
          {props.board?.title}
          {props.board?.cards?.length}
        </Typography>
        <MdEdit />
      </BoardHeader>
      <AllCardsContainer>
        {props.board?.cards?.map((card) => (
          <Card
            key={card.id}
            card={card}
            removeCard={props.removeCard}
            boardId={props.board?.id}
            handleCardDragEnter={props.handleCardDragEnter}
            handleCardDragLeave={props.handleCardDragLeave}
          />
        ))}
      </AllCardsContainer>
      <AddCard onSubmit={(value) => props.addCard(value, props.board?.id)} />
    </BoardContainer>
  );
};

export default Board;

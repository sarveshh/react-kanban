import React from "react";
import { Typography } from "@mui/material";
import Card from "../Card/Card";
import AddCard from "../Card/AddCard/AddCard";
import { BoardContainer, BoardHeader, AllCardsContainer } from "./BoardStyles";

const Board = (props) => {
  return (
    <BoardContainer>
      <BoardHeader>
        <Typography variant="h5">{props.board?.title}</Typography>
        <Typography variant="h5">{props.board?.cards?.length}</Typography>
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
            updateCard={props.updateCard}
            shiftCardToPrevious={props.shiftCardToPrevious}
            shiftCardToNext={props.shiftCardToNext}
            disableBackButton={props.disableBackButton}
            disableNextButton={props.disableNextButton}
          />
        ))}
      </AllCardsContainer>
      <AddCard
        onSubmit={(value, date, priority) =>
          props.addCard(value, date, priority, props.board?.id)
        }
      />
    </BoardContainer>
  );
};

export default Board;

import React from "react";
import { Typography, Box, Checkbox } from "@mui/material";
import Card from "../Card/Card";
import AddCard from "../Card/AddCard/AddCard";
import { BoardContainer, BoardHeader, AllCardsContainer } from "./BoardStyles";
import { MdOutlineSignalWifiStatusbarNull } from "react-icons/md";

const Board = (props) => {
  const [showCompletedTasks, setShowCompletedTasks] = React.useState(false);
  return (
    <BoardContainer>
      <BoardHeader>
        <Typography variant="h5">{props.board?.title}</Typography>
        <Typography variant="h5">
          {props.board.cards.filter((card) => !card.completed).length}
        </Typography>
      </BoardHeader>
      <AllCardsContainer>
        {props.board.cards
          .filter((card) => !card.completed)
          .map((card) => (
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
              markCardAsCompleted={props.markCardAsCompleted}
            />
          ))}
      </AllCardsContainer>
      <AddCard
        onSubmit={(value, date, priority) =>
          props.addCard(value, date, priority, props.board?.id)
        }
      />
      <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          checked={showCompletedTasks}
          onChange={() => setShowCompletedTasks(!showCompletedTasks)}
        />
        <Typography variant="body1">Show Completed tasks</Typography>
        <Typography variant="subtitle1" sx={{ ml: 2 }}>
          {props.board.cards.filter((card) => card.completed).length}
        </Typography>
      </Box>

      {showCompletedTasks === true ? (
        <Box>
          {props.board.cards
            .filter((card) => card.completed)
            .map((card) => (
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
        </Box>
      ) : null}
    </BoardContainer>
  );
};

export default Board;

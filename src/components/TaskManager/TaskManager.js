import React, { useState, useEffect } from "react";
import Board from "./Board/Board";

import { Box } from "@mui/material";

const TaskManager = () => {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("kanban")) || [
      {
        id: 1,
        title: "Backlog",
        cards: [],
      },
      {
        id: 2,
        title: "To Do",
        cards: [],
      },
      {
        id: 3,
        title: "Ongoing",
        cards: [],
      },
      {
        id: 4,
        title: "Done",
        cards: [],
      },
    ]
  );
  const [target, setTarget] = useState({
    cardId: "",
    boardId: "",
  });

  const addCard = (title, date, priority, boardId) => {
    const card = {
      id: boards[0].cards.length + Math.random(),
      title,
      date: date,
      priority: priority,
      completed: false,
    };
    const index = boards.findIndex((board) => board.id === boardId);
    if (index < 0) return;
    const newBoards = [...boards];
    newBoards[index].cards.push(card);
    setBoards(newBoards);
  };

  //Mark card as completed
  const markCardAsCompleted = (cardId, boardId) => {
    const index = boards.findIndex((board) => board.id === boardId);
    if (index < 0) return;
    const newBoards = [...boards];
    newBoards[index].cards = newBoards[index].cards.map((card) => {
      if (card.id === cardId) {
        card.completed = !card.completed;
      }
      return card;
    });
    setBoards(newBoards);
  };

  const removeCard = (cardId, boardId) => {
    const boardIndex = boards.findIndex((board) => board.id === boardId);
    if (boardIndex < 0) return;

    const cardIndex = boards[boardIndex].cards.findIndex(
      (card) => card.id === cardId
    );
    if (cardIndex < 0) return;

    const newBoards = [...boards];
    newBoards[boardIndex].cards.splice(cardIndex, 1);
    setBoards(newBoards);
  };

  const handleCardDragEnter = (cardId, boardId) => {
    setTarget({ cardId, boardId });
  };

  const handleCardDragLeave = (cardId, boardId) => {
    let sourceBoardIndex, sourceCardIndex, targetBoardIndex, targetCardIndex;
    sourceBoardIndex = boards.findIndex((board) => board.id === boardId);
    if (sourceBoardIndex < 0) return;

    sourceCardIndex = boards[sourceBoardIndex].cards.findIndex(
      (card) => card.id === cardId
    );
    if (sourceCardIndex < 0) return;

    targetBoardIndex = boards.findIndex((board) => board.id === target.boardId);
    if (targetBoardIndex < 0) return;

    targetCardIndex = boards[targetBoardIndex].cards.findIndex(
      (card) => card.id === target.cardId
    );
    if (targetCardIndex < 0) return;

    const tempBoards = [...boards];
    const tempCard = tempBoards[sourceBoardIndex].cards[sourceCardIndex];
    tempBoards[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
    tempBoards[targetBoardIndex].cards.splice(targetCardIndex, 0, tempCard);
    setBoards(tempBoards);
  };

  const updateCard = (cardId, boardId, card) => {
    const boardIndex = boards.findIndex((board) => board.id === boardId);
    if (boardIndex < 0) return;

    const cardIndex = boards[boardIndex].cards.findIndex(
      (card) => card.id === cardId
    );
    if (cardIndex < 0) return;

    const newBoards = [...boards];
    newBoards[boardIndex].cards[cardIndex] = card;
    setBoards(newBoards);
  };

  useEffect(() => {
    localStorage.setItem("kanban", JSON.stringify(boards));
  }, [boards]);

  //Shift card to previous block
  const shiftCardToPrevious = (cardId, boardId) => {
    const boardIndex = boards.findIndex((board) => board.id === boardId);
    if (boardIndex < 0) return;

    const cardIndex = boards[boardIndex].cards.findIndex(
      (card) => card.id === cardId
    );
    if (cardIndex < 0) return;

    const newBoards = [...boards];
    const tempCard = newBoards[boardIndex].cards[cardIndex];
    newBoards[boardIndex].cards.splice(cardIndex, 1);
    newBoards[boardIndex - 1].cards.push(tempCard);
    setBoards(newBoards);
  };

  //Shift card to next block\
  const shiftCardToNext = (cardId, boardId) => {
    const boardIndex = boards.findIndex((board) => board.id === boardId);
    if (boardIndex < 0) return;

    const cardIndex = boards[boardIndex].cards.findIndex(
      (card) => card.id === cardId
    );
    if (cardIndex < 0) return;

    const newBoards = [...boards];
    const tempCard = newBoards[boardIndex].cards[cardIndex];
    newBoards[boardIndex].cards.splice(cardIndex, 1);
    newBoards[boardIndex + 1].cards.push(tempCard);
    setBoards(newBoards);
  };

  //Disable back button if user is on the first block
  const disableBackButton = (boardId) => {
    const boardIndex = boards.findIndex((board) => board.id === boardId);
    if (boardIndex < 0) return;

    return boardIndex === 0;
  };

  //Disable next button is user is on the last block
  const disableNextButton = (boardId) => {
    const boardIndex = boards.findIndex((board) => board.id === boardId);
    if (boardIndex < 0) return;

    return boardIndex === boards.length - 1;
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ display: { sm: "flex", xs: "block" }, width: "auto", flex: 4 }}
    >
      {boards.map((board) => (
        <Board
          key={board.id}
          board={board}
          addCard={addCard}
          removeCard={removeCard}
          handleCardDragEnter={handleCardDragEnter}
          handleCardDragLeave={handleCardDragLeave}
          updateCard={updateCard}
          shiftCardToPrevious={shiftCardToPrevious}
          shiftCardToNext={shiftCardToNext}
          disableBackButton={disableBackButton}
          disableNextButton={disableNextButton}
          markCardAsCompleted={markCardAsCompleted}
        />
      ))}
    </Box>
  );
};

export default TaskManager;

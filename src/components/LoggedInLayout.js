import React, { useState, useEffect } from "react";
import Board from "./Board/Board";

import { Box } from "@mui/material";

const LoggedInLayout = () => {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("kanban")) || [
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
      {
        id: 2,
        title: "To Do",
        cards: [
          {
            id: 3,
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
            id: 4,
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
      {
        id: 3,
        title: "Ongoing",
        cards: [
          {
            id: 5,
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
            id: 6,
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
      {
        id: 4,
        title: "Done",
        cards: [
          {
            id: 5,
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
            id: 6,
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
    ]
  );
  const [target, setTarget] = useState({
    cardId: "",
    boardId: "",
  });

  const addCard = (title, boardId) => {
    const card = {
      id: boards[0].cards.length + Math.random(),
      title,
      tags: [],
      tasks: [],
      date: "",
      description: "",
    };
    const index = boards.findIndex((board) => board.id === boardId);
    if (index < 0) return;
    const newBoards = [...boards];
    newBoards[index].cards.push(card);
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

  return (
    <Box display="flex" justifyContent="space-between">
      {boards.map((board) => (
        <Board
          key={board.id}
          board={board}
          addCard={addCard}
          removeCard={removeCard}
          handleCardDragEnter={handleCardDragEnter}
          handleCardDragLeave={handleCardDragLeave}
          updateCard={updateCard}
        />
      ))}
    </Box>
  );
};

export default LoggedInLayout;

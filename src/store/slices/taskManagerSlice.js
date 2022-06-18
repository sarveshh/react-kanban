import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: JSON.parse(localStorage.getItem("kanban")) || [
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
  ],
  target: {
    cardId: "",
    boardId: "",
  },
};

const taskManagerSlice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { title, date, priority, boardId } = action.payload;
      const card = {
        id: state.boards[0].cards.length + Math.random(),
        title,
        date: date,
        priority: priority,
        completed: false,
      };
      const index = state.boards.findIndex((board) => board.id === boardId);
      if (index < 0) return;
      state.boards[index].cards.push(card);
    },
    markCardAsCompleted: (state, action) => {
      const { cardId, boardId } = action.payload;
      const index = state.boards.findIndex((board) => board.id === boardId);
      if (index < 0) return;
      state.boards[index].cards = state.boards[index].cards.map((card) => {
        if (card.id === cardId) {
          card.completed = !card.completed;
        }
      });
    },
    removeCard: (state, action) => {
      const { cardId, boardId } = action.payload;
      const index = state.boards.findIndex((board) => board.id === boardId);
      if (index < 0) return;
      state.boards[index].cards = state.boards[index].cards.filter(
        (card) => card.id !== cardId
      );
    },
    handleCardDragEnter: (state, action) => {
      const { cardId, boardId } = action.payload;
      state.target.cardId = cardId;
      state.target.boardId = boardId;
    },
    handleCardDragLeave: (state, action) => {
      const { cardId, boardId } = action.payload;
      let sourceBoardIndex, sourceCardIndex, targetBoardIndex, targetCardIndex;
      sourceBoardIndex = state.boards.findIndex(
        (board) => board.id === boardId
      );
      if (sourceBoardIndex < 0) return;

      sourceCardIndex = state.boards[sourceBoardIndex].cards.findIndex(
        (card) => card.id === cardId
      );
      if (sourceCardIndex < 0) return;

      targetBoardIndex = state.boards.findIndex(
        (board) => board.id === state.target.boardId
      );
      if (targetBoardIndex < 0) return;

      targetCardIndex = state.boards[targetBoardIndex].cards.findIndex(
        (card) => card.id === state.target.cardId
      );
      if (targetCardIndex < 0) return;

      const tempCard = state.boards[sourceBoardIndex].cards[sourceCardIndex];
      state.boards[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
      state.boards[targetBoardIndex].cards.splice(targetCardIndex, 0, tempCard);
    },
    updateCard: (state, action) => {
      const { cardId, boardId, card } = action.payload;
      const boardIndex = state.boards.findIndex(
        (board) => board.id === boardId
      );
      if (boardIndex < 0) return;

      const cardIndex = state.boards[boardIndex].cards.findIndex(
        (card) => card.id === cardId
      );
      if (cardIndex < 0) return;

      const newBoards = [...state.boards];
      newBoards[boardIndex].cards[cardIndex] = card;
    },
    shiftCardToPreviousBlock: (state, action) => {
      const { cardId, boardId } = action.payload;
      const boardIndex = state.boards.findIndex(
        (board) => board.id === boardId
      );
      if (boardIndex < 0) return;
      const cardIndex = state.boards[boardIndex].cards.findIndex(
        (card) => card.id === cardId
      );
      if (cardIndex < 0) return;

      const tempCard = state.boards[boardIndex].cards[cardIndex];
      state.boards[boardIndex].cards.splice(cardIndex, 1);
      state.boards[boardIndex - 1].cards.push(tempCard);
    },
    shiftCardToNextBlock: (state, action) => {
      const { cardId, boardId } = action.payload;
      const boardIndex = state.boards.findIndex(
        (board) => board.id === boardId
      );
      if (boardIndex < 0) return;
      const cardIndex = state.boards[boardIndex].cards.findIndex(
        (card) => card.id === cardId
      );
      if (cardIndex < 0) return;

      const tempCard = state.boards[boardIndex].cards[cardIndex];
      state.boards[boardIndex].cards.splice(cardIndex, 1);
      state.boards[boardIndex + 1].cards.push(tempCard);
    },
  },
});

export const taskManagerActions = taskManagerSlice.actions;

export default taskManagerSlice.reducer;

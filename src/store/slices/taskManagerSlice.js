import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [
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
      const newBoards = [...state.boards];
      newBoards[index].cards.push(card);
      return { ...state, boards: newBoards };
    },
    markCardAsCompleted: (state, action) => {
      const { cardId, boardId } = action.payload;
      const index = state.boards.findIndex((board) => board.id === boardId);
      if (index < 0) return;
      const newBoards = [...state.boards];
      newBoards[index].cards = newBoards[index].cards.map((card) => {
        if (card.id === cardId) {
          card.completed = !card.completed;
        }
        return card;
      });
      return { ...state, boards: newBoards };
    },
    removeCard: (state, action) => {
      const { cardId, boardId } = action.payload;
      const index = state.boards.findIndex((board) => board.id === boardId);
      if (index < 0) return;
      const newBoards = [...state.boards];
      newBoards[index].cards = newBoards[index].cards.filter(
        (card) => card.id !== cardId
      );
      return { ...state, boards: newBoards };
    },
    handleCardDragEnter: (state, action) => {
      const { cardId, boardId } = action.payload;
      return { ...state, target: { cardId, boardId } };
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

      const tempBoards = [...state.boards];
      const tempCard = tempBoards[sourceBoardIndex].cards[sourceCardIndex];
      tempBoards[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
      tempBoards[targetBoardIndex].cards.splice(targetCardIndex, 0, tempCard);
      return { ...state, boards: tempBoards };
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
      return { ...state, boards: newBoards };
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

      const newBoards = [...state.boards];
      const tempCard = newBoards[boardIndex].cards[cardIndex];
      newBoards[boardIndex].cards.splice(cardIndex, 1);
      newBoards[boardIndex - 1].cards.push(tempCard);
      return { ...state, boards: newBoards };
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

      const newBoards = [...state.boards];
      const tempCard = newBoards[boardIndex].cards[cardIndex];
      newBoards[boardIndex].cards.splice(cardIndex, 1);
      newBoards[boardIndex + 1].cards.push(tempCard);
      return { ...state, boards: newBoards };
    },
    disableBackButton: (state, action) => {
      const { boardId } = action.payload;
      const boardIndex = state.boards.findIndex(
        (board) => board.id === boardId
      );
      if (boardIndex < 0) return;
      return boardIndex === 0;
    },

    disableForwardButton: (state, action) => {
      const { boardId } = action.payload;
      const boardIndex = state.boards.findIndex(
        (board) => board.id === boardId
      );
      if (boardIndex < 0) return;
      return boardIndex === state.boards.length - 1;
    },
  },
});

export const taskManagerActions = taskManagerSlice.actions;

export default taskManagerSlice.reducer;

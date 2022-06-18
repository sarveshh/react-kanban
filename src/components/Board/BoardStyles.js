import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoardContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "95%",
  flex: 1,
  border: `1px solid ${theme.palette.borders.boardBorders}`,
  backgroundColor: theme.palette.background.boardBg,
  margin: "15px 5px",
  padding: "10px",
  overflowY: "auto",
  maxHeight: "85vh",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
    outline: "1px solid slategrey",
    borderRadius: "5px",
  },
}));
export const BoardHeader = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const AllCardsContainer = styled(Box)(({ theme }) => ({
  height: "100%",
}));

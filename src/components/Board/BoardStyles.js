import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoardContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  border: "1px solid #e5e5e5",
  backgroundColor: "#fff",
  marginTop: "15px",
  padding: "10px",
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

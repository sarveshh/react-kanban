import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CardContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  background: "whitesmoke",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
  padding: "10px",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  margin: "20px 0px",
  "&:hover": {
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    transform: "scale(1.05)",
    transition: "all 0.3s ease-in-out",
  },
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  borderBottom: "1px solid #e0e0e0",
}));

export const CardFooter = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  borderTop: "1px solid #e0e0e0",
}));

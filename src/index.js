import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//MUI Imports
import GlobalStyles from "@mui/material/GlobalStyles";

const globalStyle = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles styles={globalStyle} />
    <App />
  </React.StrictMode>
);

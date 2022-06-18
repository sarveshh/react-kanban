import React from "react";
import ReactDOM from "react-dom/client";

//Dependencies
import { Provider } from "react-redux";

//Components or Files
import store from "./store/store";
import App from "./App";

//MUI Imports
import GlobalStyles from "@mui/material/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

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
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles styles={globalStyle} />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

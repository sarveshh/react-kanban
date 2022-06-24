import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const Button = styled(Link)(
  ({ theme, primary, big, dark, fontbig }) => ({
    borderRadius: "50px",
    whiteSpace: "nowrap",
    outline: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.2s ease-in-out",

    background: primary === "true" ? "#01BF71" : "#010606",
    padding: big ? "14px  48px" : "12px 30px",
    color: dark ? "#010606" : "#fff",
    fontSize: fontbig === "true" ? "20px" : "16px",

    " &:hover": {
      transition: "all 0.2s ease-in-out",
      background: primary === "true" ? "#fff" : "#01BF71",
    },
  })
);

export const SquaredButtonWithLink = styled(Link)(
  ({ theme, primary, big, dark, fontbig, background }) => ({
    whiteSpace: "nowrap",
    outline: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.2s ease-in-out",
    marginRight: "15px",

    background: background ? "#25282c" : "#01BF71",
    padding: big ? "14px  48px" : "12px 30px",
    color: dark ? "#fff" : "#fff",
    fontSize: fontbig === "true" ? "20px" : "16px",

    " &:hover": {
      transition: "all 0.2s ease-in-out",
      background: primary === "true" ? "#25282c" : "#01BF71",
    },
    "@media screen (max-width:600px)": {
      marginBottom: "15px",
    },
  })
);

export const SquaredButton = styled("button")(
  ({ theme, primary, big, dark, fontbig, background }) => ({
    whiteSpace: "nowrap",
    outline: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.2s ease-in-out",
    marginRight: "15px",

    background: background ? "#25282c" : "#01BF71",
    padding: big ? "14px  48px" : "12px 30px",
    color: dark ? "#fff" : "#fff",
    fontSize: fontbig === "true" ? "20px" : "16px",

    " &:hover": {
      transition: "all 0.2s ease-in-out",
      background: primary === "true" ? "#25282c" : "#01BF71",
    },
    "@media screen (max-width:600px)": {
      marginBottom: "15px",
    },
  })
);

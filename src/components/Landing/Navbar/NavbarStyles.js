import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const Nav = styled("nav")(({ theme, scrollnav }) => ({
  background: scrollnav === "true" ? "#000" : "transparent",
  height: "80px",
  marginTop: "-80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  position: "sticky",
  top: 0,
  zIndex: 10,
  "@media screen and (max-width:960px)": { transition: "0.8s all ease " },
}));

export const NavbarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  height: "80px",
  zIndex: 1,
  width: "100%",
  padding: " 0 24px",
  maxWidth: "1100px",
  fontFamily: "Inter",
}));

export const NavLogo = styled("a")(({ theme }) => ({
  color: "#fff",
  justifySelf: "flex-start",
  cursor: "pointer",
  fontSize: "1.5rem",
  display: "flex",
  alignItems: "center",
  marginLeft: "24px",
  fontWeight: "bold",
  textDecoration: "none",
}));

export const MobileIcon = styled("div")(({ theme }) => ({
  display: "none",

  "@media  (max-width:768px)": {
    display: "block",
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(-100%, 60%)",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#fff",
  },
}));

export const NavMenu = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  textAlign: "center",
  alignItems: "center",
  marginRight: "10px",

  "@media screen (max-width:768px)": {
    display: "none",
  },
}));

export const NavItem = styled("li")(({ theme }) => ({
  height: "80px",
}));

export const NavLinks = styled(Link)(({ theme }) => ({
  color: "#fff",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0 1rem",
  height: "100%",
  cursor: "pointer",
  " &.active": { borderBottom: "3px solid #01bf71" },
}));

export const NavBtn = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  "@media (max-width:768px)": {
    display: "none",
  },
}));

export const NavBtnLink = styled("a")(({ theme }) => ({
  borderRadius: "50px",
  background: "#01bf71",
  whiteSpace: "nowrap",
  padding: "10px 22px",
  color: "#010606",
  fontSize: "16px",
  outline: "none",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",
  marginRight: "10px",

  " &:hover": {
    transition: "all 0.2s ease-in-out",
    background: "#fff",
    color: "#010606",
  },
}));

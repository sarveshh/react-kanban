import { styled } from "@mui/material/styles";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled("div")(({ theme }) => ({
  background: "#151719",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: " 0 30px",
  height: "1100px",
  position: "relative",
  fontFamily: "Inter",
  zIndex: 1,

  "@media (max-width:768px)": {
    height: "800px",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.6)100%)  linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%)",
    zIndex: 2,
  },
}));

export const BannerImg = styled("img")(({ theme }) => ({
  display: "block",
  width: "80%",

  "@media (max-width:768px)": {
    display: "none",
  },
}));

export const HeroContent = styled("div")(({ theme }) => ({
  zIndex: 3,
  maxWidth: "1200px",
  position: "absolute",
  padding: "8px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  top: "150px",
  "@media (max-width:768px)": {
    top: "25vh",
  },
}));

export const HeroH1 = styled("h1")(({ theme }) => ({
  color: "#fff",
  fontSize: "48px",
  textAlign: "center",
  marginBottom: "10px",

  "@media (max-width:768px)": {
    fontSize: "40px",
  },

  "@media (max-width:480px)": {
    fontSize: "32px",
  },
}));

export const HeroP = styled("p")(({ theme }) => ({
  marginTop: "0px",
  color: "#9ca9b3",
  fontSize: "24px",
  textAlign: "center",
  marginBottom: "10px",
  maxWidth: "600px",

  "@media (max-width:768px)": {
    fontSize: "24px",
  },

  "@media (max-width:480px)": {
    fontSize: "18px",
  },
}));

export const HeroBtnWrapper = styled("div")(({ theme }) => ({
  marginTop: "10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  "@media only screen and (max-width:600px)": {
    flexDirection: "column",
    marginBottom: "15px",
  },
}));

export const ArrowForward = styled(MdArrowForward)(({ theme }) => ({
  marginLeft: "8px",
  fontSize: "20px",
}));

export const ArrowRight = styled(MdKeyboardArrowRight)(({ theme }) => ({
  marginLeft: "8px",
  fontSize: "20px",
}));

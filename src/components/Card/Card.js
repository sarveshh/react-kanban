import React from "react";
import { Box, Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { CardContainer, CardFooter, CardHeader } from "./CardStyles";
import Tags from "../Tags/Tags";

const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <Tags text="Frontend" color="#f5f5f5" />
        <Typography variant="h5">Card Title</Typography>
        <MdEdit />
        <AiFillDelete />
      </CardHeader>
      <CardFooter className="card_footer">
        <BsCheck2Circle />
        {/* <Clock /> */}
      </CardFooter>
    </CardContainer>
  );
};

export default Card;

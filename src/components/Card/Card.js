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
      <Tags text="Frontend" />
      <Tags text="Backend" />
      <CardHeader>
        <Typography variant="h5">Card Title</Typography>
        <Box>
          <MdEdit />
          <AiFillDelete />
        </Box>
      </CardHeader>
      <CardFooter className="card_footer">
        <Typography variant="body1">29Sept</Typography>
        <BsCheck2Circle />
        {/* <Clock /> */}
      </CardFooter>
    </CardContainer>
  );
};

export default Card;

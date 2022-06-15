import React from "react";
import { Box, Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import Tags from "../Tags/Tags";

const Card = () => {
  return (
    <Box>
      <Box>
        <Tags text="Frontend" color="#f5f5f5" />
        <Typography variant="h5">Card Title</Typography>
        <MdEdit />
        <AiFillDelete />
      </Box>
      <Box className="card_footer">
        <BsCheck2Circle />
        {/* <Clock /> */}
      </Box>
    </Box>
  );
};

export default Card;

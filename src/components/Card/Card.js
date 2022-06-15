import React from "react";
import { Box, Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { CardContainer, CardFooter, CardHeader } from "./CardStyles";
import Tags from "../Tags/Tags";

const Card = ({ card }) => {
  return (
    <CardContainer>
      {card?.tags?.map((tag, index) => (
        <Tags key={index} text={tag.text} color={tag.color} />
      ))}
      <CardHeader>
        <Typography variant="h5">{card.title}</Typography>
        <Box>
          <MdEdit />
          <AiFillDelete />
        </Box>
      </CardHeader>
      <CardFooter className="card_footer">
        <Typography variant="body1">{card.date}</Typography>
        <BsCheck2Circle />
      </CardFooter>
    </CardContainer>
  );
};

export default Card;

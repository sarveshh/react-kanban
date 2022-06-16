import React from "react";
import { Box, Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { CardContainer, CardFooter, CardHeader } from "./CardStyles";
import Tags from "../Tags/Tags";

const Card = (props) => {
  return (
    <CardContainer
      draggable
      onDragEnd={() => props.handleCardDragLeave(props.card?.is, props.boardId)}
      onDragEnter={() =>
        props.handleCardDragEnter(props.card?.is, props.boardId)
      }
    >
      {props.card?.tags?.map((tag, index) => (
        <Tags key={index} text={tag.text} color={tag.color} />
      ))}
      <CardHeader>
        <Typography variant="h5">{props.card.title}</Typography>
        <Box>
          <MdEdit />
          <AiFillDelete
            onClick={() => props.removeCard(props.card?.id, props.boardId)}
          />
        </Box>
      </CardHeader>
      <CardFooter className="card_footer">
        <Typography variant="body1">{props.card.date}</Typography>
        <BsCheck2Circle />
      </CardFooter>
    </CardContainer>
  );
};

export default Card;

import React from "react";
import { Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { FaBackward, FaForward } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { CardContainer, CardFooter, CardHeader } from "./CardStyles";
import Tags from "../Tags/Tags";
import CardInfo from "../CardInfo/CardInfo";

const Card = (props) => {
  const [showCardInfo, setShowCardInfo] = React.useState(false);
  return (
    <>
      {showCardInfo && (
        <CardInfo
          card={props.card}
          onClose={() => setShowCardInfo(false)}
          open={showCardInfo}
          updateCard={props.updateCard}
          boardId={props.boardId}
        />
      )}
      <CardContainer
        priority={props.card.priority}
        draggable
        onDragEnd={() =>
          props.handleCardDragLeave(props.card?.id, props.boardId)
        }
        onDragEnter={() =>
          props.handleCardDragEnter(props.card?.id, props.boardId)
        }
        onClick={() => setShowCardInfo(true)}
      >
        <CardHeader>
          <Typography variant="h5">{props.card.title}</Typography>
        </CardHeader>
        <CardFooter>
          <Typography variant="body1">{props.card.date}</Typography>
        </CardFooter>
        <CardFooter>
          <FaBackward />
          <MdEdit />
          <AiFillDelete
            onClick={() => props.removeCard(props.card?.id, props.boardId)}
          />
          <FaForward />
        </CardFooter>
      </CardContainer>
    </>
  );
};

export default Card;

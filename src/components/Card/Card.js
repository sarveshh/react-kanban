import React from "react";
import { Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { FaBackward, FaForward } from "react-icons/fa";
import { CardContainer, CardFooter, CardHeader } from "./CardStyles";
import CardInfo from "./CardInfo/CardInfo";
import { IconButton } from "@mui/material";

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
      >
        <CardHeader>
          <Typography variant="h5">{props.card.title}</Typography>
        </CardHeader>
        <CardFooter>
          <Typography variant="body1">{props.card.date}</Typography>
        </CardFooter>
        <CardFooter>
          <IconButton
            disabled={props.disableBackButton(props.boardId)}
            onClick={() =>
              props.shiftCardToPrevious(props.card?.id, props.boardId)
            }
          >
            <FaBackward />
          </IconButton>
          <IconButton onClick={() => setShowCardInfo(true)}>
            <MdEdit />
          </IconButton>
          <IconButton
            onClick={() => props.removeCard(props.card?.id, props.boardId)}
          >
            <AiFillDelete />
          </IconButton>
          <IconButton
            disabled={props.disableNextButton(props.boardId)}
            onClick={() => props.shiftCardToNext(props.card?.id, props.boardId)}
          >
            <FaForward />
          </IconButton>
        </CardFooter>
      </CardContainer>
    </>
  );
};

export default Card;

import React from "react";
import { Box, Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
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
          {props.card?.tasks?.length > 0 && (
            <>
              <BsCheck2Circle />
              {props.card?.tasks?.filter((item) => item.completed.length)}/
              {props.card?.tasks?.length}
            </>
          )}
        </CardFooter>
      </CardContainer>
    </>
  );
};

export default Card;

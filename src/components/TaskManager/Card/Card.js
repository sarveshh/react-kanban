import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { FaBackward, FaForward } from "react-icons/fa";
import { CardContainer, CardFooter, CardHeader } from "./CardStyles";
import CardInfo from "./CardInfo";
import { IconButton, Checkbox, Box, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { taskManagerActions } from "../../../store/slices/taskManagerSlice";

const Card = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ ...props.card });
  useEffect(() => {
    dispatch(
      taskManagerActions.updateCard({
        cardId: props.card.id,
        boardId: props.boardId,
        card: values,
      })
    );
  }, [values]);
  const [showCardInfo, setShowCardInfo] = React.useState(false);
  return (
    <>
      {showCardInfo && (
        <CardInfo
          card={props.card}
          onClose={() => setShowCardInfo(false)}
          open={showCardInfo}
          boardId={props.boardId}
        />
      )}
      <CardContainer
        priority={props.card.priority}
        draggable
        onDragEnd={() =>
          dispatch(
            taskManagerActions.handleCardDragLeave({
              cardId: props.card?.id,
              boardId: props.boardId,
            })
          )
        }
        onDragEnter={() =>
          dispatch(
            taskManagerActions.handleCardDragEnter({
              cardId: props.card?.id,
              boardId: props.boardId,
            })
          )
        }
      >
        <Box display="flex">
          <Tooltip title="Mark as Completed">
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              checked={props.card?.completed}
              disabled={props.card?.completed}
              onChange={() =>
                setValues({ ...values, completed: !values.completed })
              }
            />
          </Tooltip>
          <CardHeader>
            <Typography variant="h6">{props.card.title}</Typography>
          </CardHeader>
        </Box>
        <CardFooter>
          <Typography variant="h6">{props.card.date}</Typography>
        </CardFooter>
        <CardFooter>
          <IconButton
            disabled={props.boardId === 1}
            onClick={() =>
              dispatch(
                taskManagerActions.shiftCardToPreviousBlock({
                  cardId: props.card?.id,
                  boardId: props.boardId,
                })
              )
            }
          >
            <FaBackward color="#777" />
          </IconButton>
          <IconButton onClick={() => setShowCardInfo(true)}>
            <MdEdit color="#777" />
          </IconButton>
          <IconButton
            onClick={() =>
              dispatch(
                taskManagerActions.removeCard({
                  cardId: props.card?.id,
                  boardId: props.boardId,
                })
              )
            }
          >
            <AiFillDelete color="#777" />
          </IconButton>
          <IconButton
            disabled={props.boardId === 4}
            onClick={() =>
              dispatch(
                taskManagerActions.shiftCardToNextBlock({
                  cardId: props.card?.id,
                  boardId: props.boardId,
                })
              )
            }
          >
            <FaForward color="#777" />
          </IconButton>
        </CardFooter>
      </CardContainer>
    </>
  );
};

export default Card;

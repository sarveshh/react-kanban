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
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Card = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ ...props.card });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

      {/* <-------------------------------------Start of confirmm delete dialog --------------> */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography variant="h5" sx={{ m: 2 }}>
          Delete this task?
        </Typography>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.card.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() =>
              dispatch(
                taskManagerActions.removeCard({
                  cardId: props.card?.id,
                  boardId: props.boardId,
                })
              )
            }
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* <-------------------------------------End of confirmm delete dialog --------------> */}

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
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28, color: "#808080" } }}
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
          <IconButton onClick={handleClickOpen}>
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

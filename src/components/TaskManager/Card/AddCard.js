import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Tooltip,
} from "@mui/material";

import { customIcons } from "../../../utils/data";
import { useDispatch } from "react-redux";
import { taskManagerActions } from "../../../store/slices/taskManagerSlice";

const AddCard = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState(null);
  const [priority, setPriority] = useState("whitesmoke");

  const getPriority = (id) => {
    let priorityColor = customIcons.find((item) => item.id === id).color;
    setPriority(priorityColor);
  };

  return (
    <Box sx={{ mt: 2 }}>
      {show ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(
              taskManagerActions.addCard({
                title: inputValue,
                date,
                priority,
                boardId: props.boardId,
              })
            );
            setShow(false);
            setInputValue("");
          }}
        >
          <TextField
            type="text"
            variant="outlined"
            label="Add Task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fullWidth
          />
          <Box display="flex" alignItems="center" sx={{ mb: 2, mt: 2 }}>
            <Typography variant="subtitle1" sx={{ mr: 3 }}>
              Deadline
            </Typography>
            <input
              type="date"
              style={{
                outline: "none",
                border: "1px solid black",
                borderradius: "3px",
                padding: "10px",
                fontsize: "1.2rem",
                marginbottom: "10px",
              }}
              onChange={(e) =>
                setDate(new Date(e.target.value).toISOString().substr(0, 10))
              }
            />
          </Box>
          <Box
            display="flex"
            fullWidth
            alignItems="center"
            sx={{ mb: 2, mt: 2 }}
          >
            <Typography variant="subtitle1" sx={{ mr: 3 }}>
              Priority
            </Typography>
            {customIcons.map((icon) => (
              <Box key={icon.id} onClick={() => getPriority(icon?.id || 4)}>
                <Tooltip title={icon.label}>
                  <IconButton>{icon.icon}</IconButton>
                </Tooltip>
              </Box>
            ))}
          </Box>
          <Box display="flex" fullWidth>
            <Button type="submit" variant="contained" fullWidth>
              Add card
            </Button>
            <Button variant="outlined" onClick={() => setShow(false)} fullWidth>
              Cancel
            </Button>
          </Box>
        </form>
      ) : (
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => setShow(true)}
        >
          Add task
        </Button>
      )}
    </Box>
  );
};

export default AddCard;

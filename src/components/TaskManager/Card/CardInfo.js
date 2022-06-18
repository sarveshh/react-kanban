import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";

import { IconButton, Tooltip, Checkbox } from "@mui/material";
import { customIcons } from "../../../data";
import { useDispatch } from "react-redux";
import { taskManagerActions } from "../../../store/slices/taskManagerSlice";

export default function CardInfo(props) {
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
    console.log(values);
  }, [values]);

  const setPriority = (id) => {
    let priorityColor = customIcons.find((item) => item.id === id).color;
    setValues({ ...values, priority: priorityColor });
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <Typography variant="h5" sx={{ m: 3 }}>
        Edit Task
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          checked={values.completed}
          onChange={() =>
            setValues({ ...values, completed: !values.completed })
          }
        />
        <Typography variant="body1">Mark as Completed</Typography>
      </Box>
      <DialogContent>
        <Box display="flex" flexDirection="column">
          <TextField
            defaultValue={values.title}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            sx={{ mt: 2 }}
          />
          <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
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
              defaultValue={
                values.date
                  ? new Date(values.date).toISOString().substring(0, 10)
                  : ""
              }
              onChange={(e) => setValues({ ...values, date: e.target.value })}
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
              <Box key={icon.id} onClick={() => setPriority(icon.id)}>
                <Tooltip title={icon.label}>
                  <IconButton>{icon.icon}</IconButton>
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

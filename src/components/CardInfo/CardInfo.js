import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import LinearProgress from "@mui/material/LinearProgress";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Tags from "../Tags/Tags";
import { AiFillDelete } from "react-icons/ai";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CardInfo(props) {
  const colors = ["#a8193d", "#4fcc25", "black"];
  const [activeColor, setActiveColor] = useState("");
  const [values, setValues] = useState({ ...props.card });

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const calculateProgress = (card) => {
    const total = card.tasks.length;
    const completed = card.tasks.filter((task) => task.completed).length;
    return (completed / total) * 100;

    // if (values.tasks?.length === 0) return "0";
    // const completed = values.tasks?.filter((task) => task.completed).length;
    // return (completed / values.tasks?.length) * 100 + "";
  };

  const addLabel = (value, color) => {
    const index = values.labels?.findIndex((label) => label.text === value);
    if (index > -1) return;
    const label = {
      text: value,
      color: color,
    };
    setValues({ ...values, labels: [...values.labels, label] });
    setActiveColor("");
  };

  const removeLabel = (text) => {
    const tempLabels = values.labels?.filter((label) => label.text !== text);
    setValues({ ...values, labels: tempLabels });
  };

  const addTasks = (value) => {
    const task = {
      id: values.tasks?.length + 1,
      text: value,
      completed: false,
    };
    setValues({ ...values, tasks: [...values.tasks, task] });
  };

  const removeTask = (id) => {
    const tempTasks = values.tasks?.filter((task) => task.id !== id);
    setValues({ ...values, tasks: tempTasks });
  };

  const updateTask = (id, completed) => {
    const index = values.tasks?.findIndex((task) => task.id === id);
    if (index === -1) return;

    const tempTasks = [...values.tasks];
    tempTasks[index].completed = completed;
    setValues({ ...values, tasks: tempTasks });
  };

  useEffect(() => {
    props.updateCard(props.card.id, props.boardId, values);
  }, [values]);

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Edit Task"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Box sx={{ width: "100%" }}>
                <LinearProgressWithLabel value={progress} />
              </Box>
            </DialogContentText>
            <TextField
              defaultValue={values.title}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
            <TextField
              defaultValue={values.description}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
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
                  ? new Date(values.date).toISOString().substr(0, 10)
                  : ""
              }
              onChange={(e) => setValues({ ...values, date: e.target.value })}
            />
            Tags
            {values.tags.map((tag, index) => (
              <Tags
                key={index}
                color={tag.color}
                text={tag.text}
                close
                onClose={() => removeLabel(tag.text)}
              />
            ))}
            <TextField
              id="outlined-basic"
              label="Add Label"
              variant="outlined"
              onSubmit={(e) => addLabel(e.target.value, activeColor)}
            />
            {colors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color }}
                className={color === activeColor ? "active" : ""}
                onClick={() => setActiveColor(color)}
              />
            ))}
            {values.tasks.map((task, index) => (
              <Box key={index}>
                <input
                  type="checkbox"
                  defaultValue={task.completed}
                  onChange={(e) => updateTask(task.id, e.target.checked)}
                />
                <p>{task.text}</p>
                <AiFillDelete onClick={() => removeTask(task.id)} />
              </Box>
            ))}
            <TextField
              id="outlined-basic"
              label="Add task"
              variant="outlined"
              onSubmit={(e) => addTasks(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={props.onClose}>
              Disagree
            </Button>
            <Button onClick={props.onClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

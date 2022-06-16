import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Tags from "../Tags/Tags";
import { AiFillDelete } from "react-icons/ai";

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

export default function CardInfo(props) {
  const colors = ["#a8193d", "#4fcc25", "black"];
  const [activeColor, setActiveColor] = useState("");
  const [values, setValues] = useState({ ...props.card });

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

  useEffect(() => {
    props.updateCard(props.card.id, props.boardId, values);
  }, [values]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit task
            </Typography>
            <Box sx={{ mt: 2 }}>
              <TextField
                defaultValue={values.title}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                onChange={(e) =>
                  setValues({ ...values, title: e.target.value })
                }
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
                  <input type="checkbox" defaultValue={task.completed} />
                  <p>{task.text}</p>
                  <AiFillDelete />
                </Box>
              ))}
              <TextField
                id="outlined-basic"
                label="Add task"
                variant="outlined"
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

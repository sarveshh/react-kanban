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
import { useTheme } from "@mui/material/styles";
import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
import { BsFillDiamondFill } from "react-icons/bs";
import { IconButton, Tooltip } from "@mui/material";

export default function CardInfo(props) {
  const [values, setValues] = useState({ ...props.card });

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    props.updateCard(props.card.id, props.boardId, values);
  }, [values]);

  const testClick = (id) => {
    let priorityColor = customIcons.find((item) => item.id === id).color;
    setValues({ ...values, priority: priorityColor });
  };

  const customIcons = [
    {
      id: 1,
      icon: <FcHighPriority />,
      label: "High Priority",
      color: "red",
    },
    {
      id: 2,
      icon: <FcMediumPriority />,
      label: "Medium Priority",
      color: "yellow",
    },
    {
      id: 3,
      icon: <FcLowPriority />,
      label: "Low Priority",
      color: "green",
    },
    {
      id: 4,
      icon: <BsFillDiamondFill />,
      label: "No Priority",
      color: "whitesmoke",
    },
  ];

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
            <Box display="flex" flexDirection="column">
              <TextField
                defaultValue={values.title}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                onChange={(e) =>
                  setValues({ ...values, title: e.target.value })
                }
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
                  onChange={(e) =>
                    setValues({ ...values, date: e.target.value })
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
                  <Box key={icon.id} onClick={() => testClick(icon.id)}>
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
      </div>
    </div>
  );
}

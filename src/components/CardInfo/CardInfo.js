import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function CardInfo(props) {
  const [values, setValues] = useState({ ...props.card });

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    props.updateCard(props.card.id, props.boardId, values);
  }, [values]);

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
            <TextField
              defaultValue={values.title}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
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
                  ? new Date(values.date).toISOString().substring(0, 10)
                  : ""
              }
              onChange={(e) => setValues({ ...values, date: e.target.value })}
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

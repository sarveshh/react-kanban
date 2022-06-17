import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { FaTrashAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

export default function TrashIcon(props) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.openTrash}
        onClick={props.handleClose}
      >
        <Box
          sx={{ position: "absolute", top: "80vh", zIndex: 100000 }}
          // onDragOver={() => props.onDragOver(props.card?.id, props.boardId)}
        >
          <IconButton aria-label="delete">
            <IconContext.Provider
              value={{
                style: {
                  width: "50px",
                  height: "50px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "10%",
                  padding: "10px",
                  margin: "10px",
                },
              }}
            >
              <FaTrashAlt />
            </IconContext.Provider>
          </IconButton>
        </Box>
      </Backdrop>
    </div>
  );
}

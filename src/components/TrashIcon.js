import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { FaTrashAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

export default function TrashIcon() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Box sx={{ position: "absolute", top: "80vh", zIndex: 100000 }}>
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

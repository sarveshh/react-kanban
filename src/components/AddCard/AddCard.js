import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { IoIosClose } from "react-icons/io";

const AddCard = (props) => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <Box>
      {show ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (props.onSubmit) {
              props.onSubmit(inputValue);
            }
            setShow(false);
            setInputValue("");
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add Task"
          />
          <Box className="footer">
            <Button type="submit">Add card</Button>
            <IoIosClose onClick={() => setShow(false)} />
          </Box>
        </form>
      ) : (
        <Typography variant="h5" onClick={() => setShow(true)}>
          Add card
        </Typography>
      )}
    </Box>
  );
};

export default AddCard;

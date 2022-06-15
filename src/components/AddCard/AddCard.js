import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { IoIosClose } from "react-icons/io";

const AddCard = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Box>
      {show ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (props.onSubmit) {
              props.onSubmit();
            }
          }}
        >
          <input
            type="text"
            defaultValue={props.text}
            placeholder={props.placeholder}
          />
          <Box className="footer">
            <Button type="submit">{props.buttonText || "Add card"}</Button>
            <IoIosClose onClick={() => setShow(false)} />
          </Box>
        </form>
      ) : (
        <Typography variant="h5" onClick={() => setShow(true)}>
          {props.text || "Add card"}
        </Typography>
      )}
    </Box>
  );
};

export default AddCard;

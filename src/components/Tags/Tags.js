import React from "react";
import { Box, Typography } from "@mui/material";
import { IoIosClose } from "react-icons/io";

const Tags = (props) => {
  return (
    <Box style={{ backgroundColor: props.color }}>
      {props.text}
      {props.close && (
        <IoIosClose onClick={props.onClose ? props.onClose() : ""} />
      )}
    </Box>
  );
};

export default Tags;

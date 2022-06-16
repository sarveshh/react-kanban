import React from "react";
import { Chip } from "@mui/material";

const Tags = (props) => {
  return (
    <Chip
      label={props.text}
      color={props.color ? props.color : "default"}
      // onClick={props.onClose ? props.onClose() : ""}
      // onDelete={props.onDelete ? props.onDelete() : ""}
      size="medium"
    />
  );
};

export default Tags;

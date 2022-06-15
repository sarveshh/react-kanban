import React from "react";
import { Box, Typography } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { TagsContainer } from "./TagsStyles";

const Tags = (props) => {
  return (
    <TagsContainer style={{ backgroundColor: props.color }}>
      {props.text}
      {props.close && (
        <IoIosClose onClick={props.onClose ? props.onClose() : ""} />
      )}
    </TagsContainer>
  );
};

export default Tags;

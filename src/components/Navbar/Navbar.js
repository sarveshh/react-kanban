import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { BsPersonFill as AccountCircle } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../store/actions";
import { useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };

  useEffect(() => {
    if (currentUser === null) {
      navigate("/signin");
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [currentUser, navigate]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kanban
          </Typography>
          {auth && (
            <>
              <Button
                sx={{ color: "white", mr: 3, border: "0.5px solid white" }}
                onClick={handleAuth}
              >
                Logout
              </Button>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

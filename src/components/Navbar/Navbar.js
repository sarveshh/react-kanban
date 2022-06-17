import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function Navbar(props) {
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
  }, [currentUser]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
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
              color="inherit"
              onClick={() => props.setIsLightMode(!props.isLightMode)}
            >
              <IconContext.Provider
                value={{
                  style: {
                    width: "30px",
                    height: "30px",
                    color: props.isLightMode === true ? "black" : "white",
                  },
                }}
              >
                {props.isLightMode === true ? <MdDarkMode /> : <MdLightMode />}
              </IconContext.Provider>
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

import React, { useEffect, useState } from "react";

//Mui imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

//Icon imports
import { AiFillLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons/lib";

import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  googleSignInInitiate,
  loginInitiate,
} from "../../store/slices/authSlice";

export default function SignIn() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/app");
    }
  }, [currentUser, navigate]);
  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };

  const [state, setState] = useState({
    email: "test@test.com",
    password: "test@test.com",
  });
  const { email, password } = state;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AiFillLock />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            defaultValue="test@test.com"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            defaultValue="test@test.com"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => handleGoogleSignIn()}
          >
            <IconContext.Provider
              value={{
                style: {
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                  marginBottom: "5px",
                },
              }}
            >
              <FcGoogle />
            </IconContext.Provider>
            Sign In With Google
          </Button>
          <Button
            variant="text"
            LinkComponent={Link}
            to="/signup"
            fullWidth
            sx={{ mt: 4 }}
          >
            Don't have an account? Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

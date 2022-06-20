import React, { useEffect, useState } from "react";

//Mui imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerInitiate } from "../../store/slices/authSlice";
import { upload } from "../../firebase";

export default function SignUp() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, []);

  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    upload(photo, currentUser, setLoading);
  };

  const [state, setState] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
    contactNumber: "",
  });
  const { name, username, email, password, contactNumber } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(name, email, password));
    setState({
      name: "",
      username: "",
      email: "",
      password: "",
      contactNumber: "",
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={handleChange}
                value={name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleChange}
                value={username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="contactNumber"
                label="Contact Number"
                type="number"
                id="contactNumber"
                autoComplete="Contact Number"
                onChange={handleChange}
                value={contactNumber}
              />
            </Grid>
            <Box
              display="flex"
              width="100%"
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Button component="label">
                Profile image
                <input type="file" hidden onChange={handleImageChange} />
              </Button>
              <Avatar alt="Remy Sharp" src={photoURL} />
              <Button
                variant="outlined"
                component="label"
                onClick={handleUploadClick}
                disabled={loading || !photo}
                sx={{ ml: 2 }}
              >
                Upload File
              </Button>
            </Box>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
        <Button
          variant="text"
          LinkComponent={Link}
          to="/"
          fullWidth
          sx={{ mt: 1 }}
        >
          Already have an account ? Sign In
        </Button>
      </Box>
    </Container>
  );
}

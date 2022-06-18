import { createSlice } from "@reduxjs/toolkit";
import { auth, googleAuthProvider } from "../firebase";

const initialState = {
  loading: false,
  error: null,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerInitiate: (state, action) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginInitiate: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutStart: (state, action) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = null;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    googleSignInStart: (state, action) => {
      state.loading = true;
    },
    googleSignInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    googleSignInFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setUser: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
  },
});
export const authActions = authSlice.actions;

export const registerInitiate = (name, email, password) => {
  return async (dispatch) => {
    dispatch(authActions.registerInitiate());
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: name,
        });
        dispatch(authActions.registerSuccess(user));
      })
      .catch((error) => dispatch(authActions.registerFail(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return (dispatch) => {
    dispatch(authActions.loginInitiate());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(authActions.loginSuccess(user));
      })
      .catch((error) => dispatch(authActions.loginFail(error.message)));
  };
};

export const logoutInitiate = () => {
  return (dispatch) => {
    dispatch(authActions.logoutStart());
    auth
      .signOut()
      .then((resp) => {
        dispatch(authActions.logoutSuccess());
      })
      .catch((error) => dispatch(authActions.logoutFail(error.message)));
  };
};

export const setUser = (user) => {
  return (dispatch) => {
    dispatch(authActions.setUser(user));
  };
};

export const googleSignInInitiate = () => {
  return (dispatch) => {
    dispatch(authActions.googleSignInStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(authActions.googleSignInSuccess(user));
      })
      .catch((error) => dispatch(authActions.googleSignInFail(error.message)));
  };
};

export default authSlice.reducer;

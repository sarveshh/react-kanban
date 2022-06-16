import * as types from "./actionTypes";
import { auth } from "../../firebase";

const registrInitiate = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

export const register = (name, username, email, password, contactNumber) => {
  return function (dispatch) {
    dispatch(registrInitiate);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: name,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => registerFail(error.message));
  };
};

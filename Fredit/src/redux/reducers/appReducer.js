import {
  SET_TOKEN_ACTION,
  SET_LOGGED_IN_ACTION,
  SET_USER_VERIFIED_ACTION,
  SET_USER_VERIFIED_ERROR_ACTION
} from "../../utils/constants";

const initialState = {
  loggedIn: false,
  token: ""
};

export default function appReducer(prevState = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOGGED_IN_ACTION:
      return { ...prevState, loggedIn: payload };
    case SET_TOKEN_ACTION:
      return { ...prevState, token: payload };
    case SET_USER_VERIFIED_ACTION:
      return { ...prevState, userVerified: payload };
    case SET_USER_VERIFIED_ERROR_ACTION:
      return { ...prevState, userVerifiedError: payload };
    default:
      return prevState;
  }
}

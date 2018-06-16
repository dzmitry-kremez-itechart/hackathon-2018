import { SET_TOKEN_ACTION, SET_LOGGED_IN_ACTION } from "../../utils/constants";

export function setToken(token) {
  return {
    type: SET_TOKEN_ACTION,
    payload: token
  };
}

export function setLoggedIn(value) {
  return {
    type: SET_LOGGED_IN_ACTION,
    payload: value
  };
}

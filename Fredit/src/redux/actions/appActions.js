import {
  SET_TOKEN_ACTION,
  SET_LOGGED_IN_ACTION,
  SET_USER_VERIFIED_ACTION,
  SET_USER_VERIFIED_ERROR_ACTION,
  CREDIT_CARD_CREATED,
  URL
} from "../../utils/constants";

import { AsyncStorage } from "react-native";

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

export function setUserVerified() {
  return {
    type: SET_USER_VERIFIED_ACTION,
    payload: true
  };
}

export function setUserVerifiedError(error) {
  return {
    type: SET_USER_VERIFIED_ERROR_ACTION,
    payload: error
  };
}

export function createUser(phoneNumber) {
  return async dispatch => {
    const response = await fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          phone: phoneNumber
        }
      })
    });

    const responseJson = await response.json();

    console.log("BEFORE", responseJson);

    try {
      await AsyncStorage.setItem("TOKEN", responseJson.token);
    } catch (error) {
      console.log("ERRROR", error);
    }

    console.log("AFTER", responseJson);

    return dispatch(setToken(responseJson.token));
  };
}

export function verifySMSCode(code) {
  return async (dispatch, getState) => {
    const token = getState().appReducer.token;

    const response = await fetch(`${URL}/users/verify`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: code
      })
    });

    const responseJson = await response.json();

    if (responseJson.verified) {
      return dispatch(setUserVerified());
    } else {
      return dispatch(setUserVerifiedError(responseJson.error));
    }
  };
}

export function createCreditCard(credit_card) {
  return async (dispatch, getState) => {
    const token = await AsyncStorage.getItem("TOKEN");

    const response = await fetch(`${URL}/credit_cards/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        credit_card
      })
    });

    const responseJson = await response.json();

    if (responseJson.credit_card) {
      return {
        type: CREDIT_CARD_CREATED
      };
    } else {
      console.log(responseJson);
    }
  };
}

export function deleteCreditCard(id) {
  return async (dispatch, getState) => {
    const token = await AsyncStorage.getItem("TOKEN");

    const response = await fetch(`${URL}/credit_cards/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  };
}

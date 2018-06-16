import * as React from "react";
import { createStackNavigator } from "react-navigation";
import { connect } from 'react-redux';
import { createUser, verifySMSCode } from '../redux/actions/appActions';
// navigators
import MainNavigator from "./MainNavigator";

// screens
import WelcomeScreen from "../screens/WelcomeScreen";

// constants
import { WELCOME_SCREEN, MAIN_SCREEN } from "../utils/constants";

export default createStackNavigator(
  {
    [WELCOME_SCREEN]: {
      screen: connect((state) => ({
        token: state.appReducer.token,
        verified: state.appReducer.userVerified,
      }), (dispatch) => ({
        onSubmitPhoneNumber: (phoneNumber) => {
          dispatch(createUser(phoneNumber));
        },
        onCodeVerification: (code) => {
          dispatch(verifySMSCode(code));
        }
      }))((props) => (
        <WelcomeScreen
          {...props}
          openMain={() => props.navigation.navigate({ routeName: MAIN_SCREEN })}
        />
      ))
    },
    [MAIN_SCREEN]: {
      screen: MainNavigator
    }
  },
  { headerMode: "none" }
);

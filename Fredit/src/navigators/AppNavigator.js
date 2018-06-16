import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { connect } from 'react-redux';
import { createUser } from '../redux/actions/welcomeScreenActions';
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
      }), (dispatch) => ({
        onSubmitPhoneNumber: (phoneNumber) => {
          dispatch(createUser(phoneNumber));
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

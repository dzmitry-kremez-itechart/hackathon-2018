import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { createUser } from "../redux/actions/welcomeScreenActions";
// navigators
import MainNavigator from "./MainNavigator";

// screens
import WelcomeScreen from "../screens/WelcomeScreen";
import CreditCardScreen from "../screens/CreditCardScreen";
import PassportScreen from "../screens/PassportScreen";

// constants
import {
  WELCOME_SCREEN,
  MAIN_NAVIGATOR,
  CREDIT_CARD_SCREEN,
  PASSPORT_SCREEN
} from "../utils/constants";

export default createStackNavigator(
  {
    [WELCOME_SCREEN]: {
      screen: connect(
        state => ({
          token: state.appReducer.token
        }),
        dispatch => ({
          onSubmitPhoneNumber: phoneNumber => {
            dispatch(createUser(phoneNumber));
          }
        })
      )(props => (
        <WelcomeScreen
          {...props}
          openMain={() =>
            props.navigation.navigate({ routeName: MAIN_NAVIGATOR })
          }
        />
      ))
    },
    [MAIN_NAVIGATOR]: {
      screen: MainNavigator
    },
    [CREDIT_CARD_SCREEN]: {
      screen: props => <CreditCardScreen {...props} />
    },
    [PASSPORT_SCREEN]: {
      screen: props => <PassportScreen {...props} />
    }
  },
  { headerMode: "none" }
);

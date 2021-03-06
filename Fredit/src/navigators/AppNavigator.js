import * as React from "react";
import { createStackNavigator } from "react-navigation";

import { connect } from "react-redux";
import { createUser, verifySMSCode } from "../redux/actions/appActions";
// navigators
import MainNavigator from "./MainNavigator";

// screens
import WelcomeScreen from "../screens/WelcomeScreen";
import PassportScreen from "../screens/PassportScreen";
import ContractDetailScreen from "../screens/ContractDetailScreen";

// constants
import {
  WELCOME_SCREEN,
  MAIN_NAVIGATOR,
  MY_CONTRACTS_SCREEN,
  CONTRACT_DETAIL_SCREEN,
  PASSPORT_SCREEN
} from "../utils/constants";

export default createStackNavigator(
  {
    [WELCOME_SCREEN]: {
      screen: connect(
        state => ({
          token: state.appReducer.token,
          verified: state.appReducer.userVerified
        }),
        dispatch => ({
          onSubmitPhoneNumber: phoneNumber => {
            dispatch(createUser(phoneNumber));
          },
          onCodeVerification: code => {
            dispatch(verifySMSCode(code));
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
    [PASSPORT_SCREEN]: {
      screen: props => <PassportScreen {...props} />
    },
    [CONTRACT_DETAIL_SCREEN]: {
      screen: props => (
        <ContractDetailScreen
          {...props}
          contract={
            props.navigation.state.params
              ? props.navigation.state.params.contract
              : {}
          }
          goBack={() => props.navigation.goBack()}
          openMyContracts={() =>
            props.navigation.navigate({ routeName: MY_CONTRACTS_SCREEN })
          }
        />
      )
    }
  },
  {
    headerMode: "none",
    initialRouteName: MAIN_NAVIGATOR
  }
);

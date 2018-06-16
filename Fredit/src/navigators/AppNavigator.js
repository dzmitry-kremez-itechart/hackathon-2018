import * as React from "react";
import { createStackNavigator } from "react-navigation";

// navigators
import MainNavigator from "./MainNavigator";

// screens
import WelcomeScreen from "../screens/WelcomeScreen";

// constants
import { WELCOME_SCREEN, MAIN_SCREEN } from "../utils/constants";

export default createStackNavigator(
  {
    [WELCOME_SCREEN]: {
      screen: ({ navigation }) => (
        <WelcomeScreen
          openMain={() => navigation.navigate({ routeName: MAIN_SCREEN })}
        />
      )
    },
    [MAIN_SCREEN]: {
      screen: MainNavigator
    }
  },
  { headerMode: "none" }
);

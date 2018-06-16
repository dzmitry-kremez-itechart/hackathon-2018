import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

// constants
import {
  NEW_TRANSACTION_SCREEN,
  TRANSACTIONS_SCREEN,
  SETTINGS_SCREEN,
  COLORS
} from "../utils/constants";

export default createBottomTabNavigator(
  {
    [NEW_TRANSACTION_SCREEN]: {
      screen: () => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>New Transaction</Text>
        </View>
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon
            name="credit-card"
            color={COLORS.primary}
            size={focused ? 32 : 24}
          />
        )
      })
    },
    [TRANSACTIONS_SCREEN]: {
      screen: () => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Transactions</Text>
        </View>
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon
            name="view-list"
            color={COLORS.primary}
            size={focused ? 32 : 24}
          />
        )
      })
    },
    [SETTINGS_SCREEN]: {
      screen: () => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Settings</Text>
        </View>
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon
            name="settings"
            color={COLORS.primary}
            size={focused ? 32 : 24}
          />
        )
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);

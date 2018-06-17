import * as React from "react";
import { createBottomTabNavigator, Navigation } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createCreditCard } from '../redux/actions/appActions';
import { connect } from 'react-redux';

// screens
import LoanContractScreen from "../screens/LoanContractScreen";
import MyContractsScreen from "../screens/MyContractsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CreditCardScreen from "../screens/CreditCardScreen";

// constants
import {
  LOAN_CONTRACT_SCREEN,
  MY_CONTRACTS_SCREEN,
  SETTINGS_SCREEN,
  CREDIT_CARD_SCREEN,
  PASSPORT_SCREEN,
  COLORS,
  SETTING_ITEMS
} from "../utils/constants";

export default createBottomTabNavigator(
  {
    [LOAN_CONTRACT_SCREEN]: {
      screen: props => <LoanContractScreen {...props} />,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon
            name="monetization-on"
            color={COLORS.primary}
            size={focused ? 32 : 24}
          />
        )
      })
    },
    [MY_CONTRACTS_SCREEN]: {
      screen: props => <MyContractsScreen {...props} />,
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
    [CREDIT_CARD_SCREEN]: {
      screen: connect(null, (dispatch) => ({
        onSubmitCreditCard: (creditCard) => {
          dispatch(createCreditCard(creditCard));
        },
      }))(props => <CreditCardScreen
        {...props}
      />),
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
    [SETTINGS_SCREEN]: {
      screen: props => (
        <SettingsScreen
          {...props}
          onItemPress={item => {
            let routeName;

            switch (item) {
              case SETTING_ITEMS.creditCard:
                routeName = CREDIT_CARD_SCREEN;
                break;
              case SETTING_ITEMS.passport:
                routeName = PASSPORT_SCREEN;
                break;
            }

            return props.navigation.navigate({ routeName });
          }}
        />
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

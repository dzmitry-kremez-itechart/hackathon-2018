import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import Button from '../Button';

// constants
import { COLORS } from "../../utils/constants";

export default class CreditCardForm extends React.Component {
  state = { creditCard: {} };

  static defaultProps = {
    textColor: COLORS.background,
    color: COLORS.primary,
    onPress: () => { },
    onReturn: null,
    disabled: false,
    styles: {},
  };

  setCreditCard = (form) => {
    const creditCard = {
      expiration_date: form.values.expiry,
      cvc: form.values.cvc,
      number: form.values.number.replace(/ /g, ''),
      valid: form.valid,
    };

    this.setState({ creditCard });
    this.props.setCreditCard(creditCard);
  }

  render() {
    const {
      color,
      textColor,
      onPress,
      styles,
    } = this.props;

    return (
      <View style={[
        { flex: 1, margin: 25, alignItems: "center" },
        styles
      ]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CreditCardInput onChange={this.setCreditCard} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}>
          <Button
            text="Add Credit Card"
            textColor={textColor}
            color={color}
            disabled={!this.state.creditCard.valid}
            onPress={this.props.onPress}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {
            this.props.onReturn ?
              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={this.props.onReturn}
                disabled={this.state.creditCard.valid}
              >
                <View style={{ alignContent: 'center', justifyContent: "center" }}>
                  <Text style={{ fontStyle: 'italic', fontSize: 15, color: COLORS.primary }}>Return to lists</Text>
                </View>
              </TouchableOpacity>
              :
              ''
          }
        </View>
      </View>
    );
  }
}

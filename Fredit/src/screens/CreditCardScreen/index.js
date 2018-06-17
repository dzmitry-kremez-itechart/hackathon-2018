import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import { COLORS } from "../../utils/constants";
import { styles } from '../WelcomeScreen/styles';
import Button from '../../components/Button';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class CreditCardScreen extends React.Component {
  state = { newCreditCardVisible: false, creditCard: { valid: false } };

  setCreditCard = (form) => {
    this.setState({
      creditCard: {
        expiration_date: form.values.expiry,
        cvc: form.values.cvc,
        number: form.values.number.replace(/ /g, ''),
        valid: form.valid
      },
    });
  };
  
  onCreateCreditCard = () => {
    this.props.onSubmitCreditCard(this.state.creditCard);
    this.setState({ newCreditCardVisible: false });
  }

  renderNewCreditCardForm = () =>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", margin: 20 }}>
      <CreditCardInput onChange={this.setCreditCard} />
      <View style={{ marginTop: -150}}>
        <Button
          text="Add Credit Card"
          textColor={COLORS.background}
          color={COLORS.primary}
          disabled={!this.state.creditCard.valid}
          onPress={this.onCreateCreditCard}
        />
        <TouchableOpacity
          style={{ marginTop: 10, marginLeft: 70}}
          onPress={() => this.setState({newCreditCardVisible: false})}
          disabled={this.state.creditCard.valid}
        >
          <View style={{ alignContent: 'center', justifyContent: "center"}}>
            <Text style={{ fontStyle: 'italic', fontSize: 15, color: COLORS.primary}}>Return to lists</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>;

  renderCreditCardLists = () =>
    <View style={{
      margin: 20
    }}>
      <TouchableOpacity style={{
        paddingLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F0F0F0',
        borderWidth: 1,
        borderColor: '#D0D0D0'
      }} onPress={() => this.setState({newCreditCardVisible: true })}>
        <Icon
          name="control-point"
          color={COLORS.primary}
          size={50}
        />
      </TouchableOpacity>
    </View>;

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: "#F5F5F5"
      }}>
        <View style={{
          zIndex: 5,
          backgroundColor: "white",
          shadowOpacity: 0.85,
          shadowRadius: 2,
          paddingHorizontal: 16,
          shadowColor: "grey",
          shadowOffset: { height: 0, width: 0 },
          paddingTop: 32,
          paddingBottom: 16,
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Text style={{ fontWeight: 'normal', fontSize: 24 }}>Credit cards</Text>
        </View>
      {
        this.state.newCreditCardVisible ?
        this.renderNewCreditCardForm() :
        this.renderCreditCardLists()
      }
      </View>
    );
  }
}

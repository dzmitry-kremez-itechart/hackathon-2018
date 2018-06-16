import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import { COLORS } from "../../utils/constants";
import { styles } from '../WelcomeScreen/styles';
import Button from '../../components/Button';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class CreditCardScreen extends React.Component {
  state = { newCreditCardVisible: false };

  renderNewCreditCardForm = () =>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", margin: 20 }}>
      <CreditCardInput />
      <View style={{ marginTop: -150}}>
        <Button
          text="Add Credit Card"
          textColor={COLORS.background}
          color={COLORS.primary}
        />
        <TouchableOpacity style={{ marginTop: 10, marginLeft: 70}} onPress={() => this.setState({newCreditCardVisible: false})}>
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
        paddingTop: 20
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30, paddingBottom: 5, paddingLeft: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Credit Cards</Text>
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

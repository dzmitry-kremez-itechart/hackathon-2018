import * as React from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import { COLORS } from "../../utils/constants";
import { styles } from '../WelcomeScreen/styles';
import Button from '../../components/Button';
import CreditCardForm from '../../components/CreditCardForm';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class CreditCardScreen extends React.Component {
  state = { newCreditCardVisible: false, creditCard: { valid: false } };

  setCreditCard = (creditCard) => {
    this.setState({ creditCard });
  };
  
  onCreateCreditCard = () => {
    if (this.state.creditCard.valid) {
      this.props.onSubmitCreditCard(this.state.creditCard);
      this.setState({ newCreditCardVisible: false });
    }
  };

  renderCreditCardLists = () => {
    return <View style={{
      margin: 20,
      flex: 1
    }}>
      <View style={{ marginVertical: 16 }}>
        <Button
          text="add credit card"
          textColor={COLORS.background}
          color={COLORS.primary}
          onPress={() => this.setState({ newCreditCardVisible: true })}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.creditCards}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  borderRadius: 4,
                  shadowOpacity: 0.85,
                  shadowRadius: 2,
                  paddingHorizontal: 10,
                  shadowColor: "#E0E0E0",
                  shadowOffset: { height: 0, width: 0 },
                  height: 56,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: COLORS.background
                }}
              >
                <Icon
                  name="credit-card"
                  color={COLORS.primary}
                  size={24}
                />
                <View style={{ flex: 1, paddingLeft: 5 }}>
                  <Text>
                    &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; {item.number.substring(12, 16)}</Text>
                </View>
                <View
                  style={{
                    height: 56,
                    width: 2,
                    backgroundColor: "#F5F5F5"
                  }}
                />
                <View
                  style={{
                    marginLeft: 16,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                {
                  item.mainCard ?
                    <Icon
                      name="done"
                      color={COLORS.primary}
                      size={24}
                    />
                    :
                    ''
                }
                {
                    item.mainCard ?
                    ''
                    :
                    <TouchableOpacity onPress={() => this.props.onDeleteCreditCard(item.id)}>
                      <Icon
                        name="delete"
                        color={COLORS.primary}
                        size={24}
                      />
                    </TouchableOpacity>
                }
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>;
  }

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
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Credit cards</Text>
        </View>
      {
        this.state.newCreditCardVisible ?
          <CreditCardForm
            onPress={this.onCreateCreditCard}
            onReturn={() => this.setState({newCreditCardVisible: false})}
            setCreditCard={this.setCreditCard}
          /> :
          this.renderCreditCardLists()
      }
      </View>
    );
  }
}

export default (props) => (
  <Query
    pollInterval={1000}
    query={gql`
      {
        user {
          creditCards {
            id
            number
            expirationDate
            mainCard
          }
        }
      }
    `}
  >
    {({ loading, error, data, refetch }) => {
      console.log("LOADING", loading);
      console.log("ERROR", error);
      console.log("DARA", data);
      if (!data || loading) {
        return <View />;
      }
      console.log(data.user.creditCards)
      return <CreditCardScreen creditCards={data.user.creditCards} {...props} refetch={refetch} />;
    }}
  </Query>
);

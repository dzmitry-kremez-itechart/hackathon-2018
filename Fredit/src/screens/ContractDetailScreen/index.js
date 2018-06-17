import * as React from "react";
import {
  Text,
  Switch,
  ScrollView,
  View,
  TouchableOpacity,
  AsyncStorage,
  Linking
} from "react-native";
import { COLORS, URL } from "../../utils/constants";

import Button from "../../components/Button";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class ContractDetalScreen extends React.Component {
  state = { agreement: false };

  setAgreement = agreement => this.setState({ agreement });

  render() {
    const percent = (
      ((this.props.contract.returnAmount - this.props.contract.issuedAmount) /
        this.props.contract.issuedAmount) *
      100
    ).toFixed(0);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F5F5F5"
        }}
      >
        <View
          style={{
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
          }}
        >
          <TouchableOpacity onPress={this.props.goBack}>
            <Icon name="chevron-left" color={COLORS.primaryDark} size={32} />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>
            Contract Detail
          </Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              borderRadius: 4,
              shadowOpacity: 0.85,
              shadowRadius: 2,
              shadowColor: "#E0E0E0",
              padding: 16,
              margin: 16,
              flex: 1,
              shadowOffset: { height: 0, width: 0 },
              backgroundColor: COLORS.background
            }}
          >
            <View
              style={{
                borderRadius: 4,
                padding: 8,
                marginBottom: 16,
                backgroundColor: COLORS.primaryDisabled
              }}
            >
              <Text style={{ fontSize: 12, color: COLORS.primaryDark }}>
                Issued Amount
              </Text>
              <Text style={{ fontSize: 18, color: COLORS.primaryDark }}>
                {`${(this.props.contract.issuedAmount / 100).toFixed(2)} $`}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 4,
                padding: 8,
                marginBottom: 16,
                backgroundColor: COLORS.primaryDisabled
              }}
            >
              <Text style={{ fontSize: 12, color: COLORS.primaryDark }}>
                Return Amount
              </Text>
              <Text style={{ fontSize: 18, color: COLORS.primaryDark }}>
                {`${(this.props.contract.returnAmount / 100).toFixed(2)} $`}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 4,
                padding: 8,
                marginBottom: 16,
                backgroundColor: COLORS.primaryDisabled
              }}
            >
              <Text style={{ fontSize: 12, color: COLORS.primaryDark }}>
                Return Duration In Days
              </Text>
              <Text style={{ fontSize: 18, color: COLORS.primaryDark }}>
                {`${this.props.contract.timePeriod}`}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 4,
                padding: 8,
                marginBottom: 16,
                backgroundColor: COLORS.primaryDisabled
              }}
            >
              <Text style={{ fontSize: 12, color: COLORS.primaryDark }}>
                Profit
              </Text>
              <Text style={{ fontSize: 18, color: COLORS.primaryDark }}>
                {`${percent} %`}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 4,
                padding: 8,
                marginBottom: 16,
                backgroundColor: COLORS.primaryDisabled
              }}
            >
              <Text style={{ fontSize: 12, color: COLORS.primaryDark }}>
                Description
              </Text>
              <Text style={{ fontSize: 18, color: COLORS.primaryDark }}>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 4,
                padding: 8,
                marginBottom: 16,
                backgroundColor: COLORS.primaryDisabled
              }}
            >
              <Text style={{ fontSize: 12, color: COLORS.primaryDark }}>
                User Rating
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="star" color={COLORS.primaryDark} size={24} />
                <Icon name="star" color={COLORS.primaryDark} size={24} />
                <Icon name="star" color={COLORS.primaryDark} size={24} />
                <Icon name="star-half" color={COLORS.primaryDark} size={24} />
                <Icon name="star-border" color={COLORS.primaryDark} size={24} />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 8,
                marginBottom: 16
              }}
            >
              <Text
                style={{ flex: 1, fontSize: 14, color: COLORS.primaryDark }}
              >
                I agree to the{" "}
                <Text
                  onPress={() =>
                    Linking.openURL(
                      "https://freedownloads.net/download/personal-loan-agreement-template.pdf"
                    )
                  }
                  style={{
                    fontSize: 14,
                    color: COLORS.primaryDark,
                    fontWeight: "bold"
                  }}
                >
                  Fredit Software and Services Agreement
                </Text>
              </Text>
              <Switch
                onTintColor={COLORS.primary}
                onValueChange={this.setAgreement}
                value={this.state.agreement}
              />
            </View>
            <Button
              onPress={async () => {
                const token = await AsyncStorage.getItem("TOKEN");

                await fetch(
                  `${URL}/loan_contracts/${this.props.contract.id}/accept`,
                  {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      authorization: token ? `Bearer ${token}` : null
                    },
                    body: JSON.stringify({})
                  }
                );

                this.props.openMyContracts();
              }}
              text="accept"
              disabled={!this.state.agreement}
              disabledColor={COLORS.primaryDisabled}
              textColor={COLORS.background}
              color={COLORS.primary}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

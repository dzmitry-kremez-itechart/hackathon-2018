import * as React from "react";
import { Text, View, SectionList, Switch, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS, SETTING_ITEMS } from "../../utils/constants";

export default class SettingsScreen extends React.Component {
  state = {}

  renderIdentitySection = () => (
    <SectionList
      stickySectionHeadersEnabled={false}
      renderItem={({ item, index, section }) =>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 4,
            borderBottomWidth: 0.5,
            borderBottomColor: '#D0D0D0',
            paddingBottom: 2,
            paddingTop: 2,
            paddingLeft: 16,
            paddingRight: 16,
            alignItems: 'center',
            backgroundColor: '#F5F5F5'
          }}
          key={index}
          onPress={() =>{ this.props.onItemPress(item.icon); console.log(item) } }
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 16
            }}
            onTouch={() => this.setState({ touchedItem: item.icon })}
          >
            <Icon
              name={item.icon}
              color={COLORS.primaryDark}
              size={25}
            />
            <Text style={{fontSize: 16, paddingLeft: 10 }}>{item.text}</Text>
          </View>

          {
            item.switch ?
              <Switch
                onValueChange={(value) => this.setState({[item.icon]: value})}
                value={this.state[item.icon]}
              />
              :
              <Icon
                name="chevron-right"
                color={COLORS.primaryDark}
                size={30}
              />
          }
  
        </TouchableOpacity>
      }
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 5, paddingLeft: 20 }}>
          <Text style={{ fontSize: 24 }}>{title}</Text>
        </View>
      )}
      sections={[
        {
          title: '',
          data: [
            { icon: SETTING_ITEMS.creditCard, text: 'Credit Cards', onPress: this.props.onCreditCardPress },
            { icon: 'account-box', text: 'Account' },
            { icon: SETTING_ITEMS.passport, text: 'Passport' },
            { icon: 'lock', text: 'Privacy and Security Help' },
            { icon: 'language', text: 'Language' },
          ]
        },
        {
          title: '',
          data: [
            { icon: 'help', text: 'Help center' },
            { icon: 'report-problem', text: 'Report a problem' },
          ]
        },
        {
          title: '',
          data: [
            { icon: 'verified-user', text: 'Contract Approved', switch: true },
          ]
        },
      ]}
      keyExtractor={(item, index) => item + index}
    />
  );

  render() {
    return (
      <View style={{
        flex: 1,
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
          <Text style={{ fontWeight: 'normal', fontSize: 24 }}>Settings</Text>
        </View>
        {this.renderIdentitySection()}
      </View>
    );
  }
}

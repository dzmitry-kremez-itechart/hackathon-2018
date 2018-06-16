import * as React from "react";
import { Text, View, SectionList, Switch } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../utils/constants";

export default class SettingsScreen extends React.Component {
  state = {}

  renderIdentitySection = () => (
    <SectionList
      contentContainerStyle={{paddingTop: 20}}
      stickySectionHeadersEnabled={false}
      renderItem={({ item, index, section }) =>
        <View
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
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 16
          }}>
            <Icon
              name={item.icon}
              color={COLORS.primaryDark}
              size={25}
            />
            <Text style={{fontSize: 16, paddingLeft: 10}}>{item.text}</Text>
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
  
        </View>
      }
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30, paddingBottom: 5, paddingLeft: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
        </View>
      )}
      sections={[
        {
          title: 'General',
          data: [
            { icon: 'credit-card', text: 'Credit Cards' },
            { icon: 'account-box', text: 'Account' },
            { icon: 'picture-in-picture', text: 'Passport' },
            { icon: 'lock', text: 'Privacy and Security Help' },
            { icon: 'language', text: 'Language' },
          ]
        },
        {
          title: 'Support',
          data: [
            { icon: 'help', text: 'Help center' },
            { icon: 'report-problem', text: 'Report a problem' },
          ]
        },
        {
          title: 'Notifications',
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
      <View style={{ flex: 1 }}>
        {this.renderIdentitySection()}
      </View>
    );
  }
}

import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import { COLORS, URL } from '../../utils/constants';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Icon from 'react-native-vector-icons/MaterialIcons';

const requestStatusColors = {
  'issued': '#F44336',
  'accepted': '#4CAF50'
}

class LoanContractScreen extends React.Component {
  state = {
    selected: 0,
    issuedAmount: '',
    returnAmount: '',
    duration: '',
    success: false
  };

  clearForm = () =>
    this.setState({
      issuedAmount: '',
      returnAmount: '',
      duration: ''
    });
  setSuccess = success => this.setState({ success });
  setIssued = issuedAmount => this.setState({ issuedAmount });
  setReturn = returnAmount => this.setState({ returnAmount });
  setDuration = duration => this.setState({ duration });
  setSelected = selected => this.setState({ selected });

  render() {
    const { selected } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <View
          style={{
            zIndex: 5,
            backgroundColor: 'white',
            shadowOpacity: 0.85,
            shadowRadius: 1,
            paddingHorizontal: 16,
            shadowColor: 'grey',
            shadowOffset: { height: 0, width: 0 },
            paddingTop: 32,
            paddingBottom: 16,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, height: 32 }}
            onPress={() => this.setSelected(0)}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: selected === 0 ? COLORS.primary : 'white',
                justifyContent: 'center',
                alignItems: 'center',
                height: 32,
                borderColor: COLORS.primary,
                borderWidth: 1,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: selected === 0 ? 'white' : COLORS.primary
                }}
              >{`DEBITOR`}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, height: 32 }}
            onPress={() => this.setSelected(1)}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: selected === 1 ? '#F44336' : 'white',
                justifyContent: 'center',
                alignItems: 'center',
                height: 32,
                borderWidth: 1,
                borderColor: '#F44336',
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: selected === 1 ? 'white' : '#F44336'
                }}
              >{`CREDITOR`}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          {selected === 0 ? (
            <View style={{ flex: 1 }}>
              <FlatList
                contentContainerStyle={{ padding: 16 }}
                data={this.props.debtorContracts}
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                renderItem={({ item }) => {
                  const returnAmount = (item.returnAmount / 100).toFixed(2);
                  const issuedAmount = (item.issuedAmount / 100).toFixed(2);

                  return (
                    <View
                      style={{
                        borderRadius: 4,
                        shadowOpacity: 0.45,
                        shadowRadius: 2,
                        paddingHorizontal: 16,
                        shadowColor: '#E0E0E0',
                        shadowOffset: { height: 0, width: 0 },
                        height: 56,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: COLORS.background
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <Text>{`In: ${issuedAmount} $`}</Text>
                        <Text>{`Out: ${returnAmount} $`}</Text>
                      </View>
                      <Text style={{ marginRight: 16, fontSize: 16, color: requestStatusColors[item.requestStatus] }}>
                        {`${item.requestStatus}`}
                      </Text>
                      <View
                        style={{
                          height: 56,
                          width: 2,
                          backgroundColor: '#F5F5F5'
                        }}
                      />
                      <View
                        style={{
                          marginLeft: 6,
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Text style={{ fontSize: 28 }}>{item.timePeriod}</Text>
                        <Text>days</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <FlatList
                contentContainerStyle={{ padding: 16 }}
                data={this.props.creditorContracts}
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                renderItem={({ item }) => {
                  const returnAmount = (item.returnAmount / 100).toFixed(2);
                  const issuedAmount = (item.issuedAmount / 100).toFixed(2);
                  const percent = (
                    ((returnAmount - issuedAmount) / issuedAmount) *
                    100
                  ).toFixed(0);

                  return (
                    <View
                      style={{
                        borderRadius: 4,
                        shadowOpacity: 0.45,
                        shadowRadius: 2,
                        paddingHorizontal: 16,
                        shadowColor: '#E0E0E0',
                        shadowOffset: { height: 0, width: 0 },
                        height: 56,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: COLORS.background
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <Text>{`In: ${issuedAmount} $`}</Text>
                        <Text>{`Out: ${returnAmount} $`}</Text>
                      </View>
                      <Text
                        style={{ marginRight: 16, fontSize: 28 }}
                      >{`${percent} %`}</Text>
                      <View
                        style={{
                          height: 56,
                          width: 2,
                          backgroundColor: '#F5F5F5'
                        }}
                      />
                      <View
                        style={{
                          marginLeft: 16,
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Text style={{ fontSize: 28 }}>{item.timePeriod}</Text>
                        <Text>days</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default () => (
  <Query
    query={gql`
      {
        user {
          id
          phone
          debtorLoanContracts {
            issuedAmount
            returnAmount
            timePeriod
            requestStatus
          }
          creditorLoanContracts {
            issuedAmount
            returnAmount
            timePeriod
            timePeriodType
            startDate
            requestStatus
          }
        }
      }
    `}
    pollInterval={1000}
  >
    {({ loading, error, data }) => {
      if (!data || loading) {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: '#f5f5f5',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                borderRadius: 4,
                shadowOpacity: 0.45,
                shadowRadius: 2,
                shadowColor: '#E0E0E0',
                shadowOffset: { height: 0, width: 0 },
                height: 100,
                width: 140,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.background
              }}
            >
              <ActivityIndicator animating size="large" color="grey" />
              <Text style={{ marginTop: 8 }}>Loading</Text>
            </View>
          </View>
        );
      }
      console.log(data);
      return (
        <LoanContractScreen
          debtorContracts={data.user.debtorLoanContracts}
          creditorContracts={data.user.creditorLoanContracts}
        />
      );
    }}
  </Query>
);

import * as React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS } from '../../utils/constants';

// styles
import { styles } from './styles';

// components
import Button from '../../components/Button';
import InputBox from '../../components/InputBox';
import InputMaskBox from '../../components/InputMaskBox';

export default class WelcomeScreen extends React.Component {
  state = { phoneNumber: '375', code: '', hasPhoneError: true };

  validatePhone = () => {
    return this.state.phoneNumber.length === 12;
  };

  scrollPhoneNext = () => {
    if (this.validatePhone()) {
      this.scrollNext();
    }
  };

  scrollNext = () => {
    this.swiper.scrollBy(1);
  };

  setCode = code => this.setState({ code });
  setPhoneNumber = (formatted, extracted) => {
    if (extracted.length <= 12) {
      this.setState({ phoneNumber: extracted });
    }
    if (extracted.length === 12) {
      this.setState({ hasPhoneError: false });
    } else {
      this.setState({ hasPhoneError: true });
    }
  };

  renderWelcomeScreen = () => (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{`Welcome\nto Fredit!`}</Text>
      <Text
        style={styles.welcomeDescriptionText}
      >{`Application to make\nyour money faster`}</Text>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={this.scrollNext}
          text="begin"
          textColor={COLORS.background}
          color={COLORS.primary}
        />
      </View>
    </View>
  );
  renderPhoneNumberScreen = () => (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{`Phone Number`}</Text>
      <Text
        style={styles.welcomeDescriptionText}
      >{`Please, enter your\nphone number`}</Text>
      <View style={styles.buttonWrapper}>
        <InputMaskBox
          onChangeText={this.setPhoneNumber}
          value={this.state.phoneNumber}
          textColor={COLORS.textColor}
          color={COLORS.primary}
          mask={'+[000] ([00]) [000]-[00]-[00]'}
        />
        <View style={{ height: 16 }} />
        <Button
          disabled={this.state.hasPhoneError}
          onPress={this.scrollPhoneNext}
          text="request code"
          textColor={COLORS.background}
          color={COLORS.primary}
        />
      </View>
    </View>
  );
  renderCodeVerificaionScreen = () => (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{`Code`}</Text>
      <Text
        style={styles.welcomeDescriptionText}
      >{`Please, enter your\nsecurity code`}</Text>
      <View style={styles.buttonWrapper}>
        <InputBox
          onChangeText={this.setCode}
          value={this.state.code}
          textColor={COLORS.primary}
          color={COLORS.primary}
        />
        <View style={{ height: 16 }} />
        <Button
          onPress={this.props.openMain}
          text="start to use"
          textColor={COLORS.background}
          color={COLORS.primary}
        />
      </View>
    </View>
  );

  render() {
    return (
      <Swiper
        ref={ref => {
          this.swiper = ref;
        }}
        loop={false}
        activeDotColor={COLORS.primaryDark}
        scrollEnabled={false}
      >
        {this.renderWelcomeScreen()}
        {this.renderPhoneNumberScreen()}
        {this.renderCodeVerificaionScreen()}
      </Swiper>
    );
  }
}

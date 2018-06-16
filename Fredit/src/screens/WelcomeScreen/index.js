import * as React from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { COLORS } from "../../utils/constants";

// styles
import { styles } from "./styles";

// components
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";

export default class WelcomeScreen extends React.Component {
  state = { phoneNumber: "+375", code: "" };

  scrollNext = () => {
    this.swiper.scrollBy(1);
  };

  setCode = code => this.setState({ code });
  setPhoneNumber = phoneNumber => this.setState({ phoneNumber });

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
        <InputBox
          onChangeText={this.setPhoneNumber}
          value={this.state.phoneNumber}
          textColor={COLORS.primary}
          color={COLORS.primary}
        />
        <View style={{ height: 16 }} />
        <Button
          onPress={this.scrollNext}
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

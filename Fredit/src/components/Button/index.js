import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// constants
import { COLORS } from "../../utils/constants";

// styles
import { styles } from "./styles";

export default class Button extends React.Component {
  static defaultProps = {
    textColor: COLORS.background,
    color: COLORS.primaryDark,
    disabledColor: COLORS.primaryDisabled,
    onPress: () => {},
    disabled: false
  };

  render() {
    const {
      text,
      color,
      textColor,
      onPress,
      disabled,
      disabledColor
    } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: !disabled ? color : disabledColor
            }
          ]}
        >
          <Text style={[styles.text, { color: textColor }]}>
            {text.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

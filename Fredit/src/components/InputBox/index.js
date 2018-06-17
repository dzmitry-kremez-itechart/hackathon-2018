import * as React from "react";
import { TextInput } from "react-native";

// constants
import { COLORS } from "../../utils/constants";

// styles
import { styles } from "./styles";

export default class InputBox extends React.Component {
  static defaultProps = {
    textColor: COLORS.background,
    color: COLORS.primaryDark,
    disabledColor: COLORS.primaryDisabled,
    onChangeText: () => {},
    disabled: false
  };

  render() {
    const {
      value,
      color,
      textColor,
      onChangeText,
      disabled,
      disabledColor
    } = this.props;

    return (
      <TextInput
        underlineColorAndroid="#00000000"
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.input,
          {
            color: textColor,
            borderColor: !disabled ? color : disabledColor
          }
        ]}
      />
    );
  }
}

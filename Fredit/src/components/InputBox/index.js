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
      disabledColor,
      height,
      fontSize,
      multiline,
      numberOfLines
    } = this.props;

    return (
      <TextInput
        value={value}
        onChangeText={onChangeText}
        multiline={!!multiline}
        numberOfLines={numberOfLines || 1}
        style={[
          styles.input,
          {
            color: textColor,
            borderColor: !disabled ? color : disabledColor,
            height: height || 56,
            fontSize: fontSize || 20
          }
        ]}
      />
    );
  }
}

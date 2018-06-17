import * as React from "react";
import TextInputMask from "react-native-text-input-mask";

// constants
import { COLORS } from "../../utils/constants";

// styles
import { styles } from "../InputBox/styles";

export default class InputMaskBox extends React.Component {
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
      mask,
      hasError
    } = this.props;

    return (
      <TextInputMask
        underlineColorAndroid="#00000000"
        value={value}
        onChangeText={onChangeText}
        mask={mask}
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

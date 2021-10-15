import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../assets/theme/colors';
import styles from './InputStyles';

const InputStyles = ({
  label,
  input,
  setIsText,
  icon,
  iconPosition,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'right') {
        return 'row-reverse';
      } else {
        return 'row';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (isFocused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={[styles.inputContainer]}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.inputWrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor()},
          {flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={styles.textInput}
          value={input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default InputStyles;

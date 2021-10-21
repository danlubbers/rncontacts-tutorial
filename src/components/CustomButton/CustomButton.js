import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../assets/theme/colors';
import styles from './CustomButtonStyles';

const CustomButton = ({
  title,
  loading,
  disabled,
  onPress,
  primary,
  secondary,
  danger,
}) => {
  const getBackgroundColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
  };
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: getBackgroundColor()}]}
      disabled={disabled}
      onPress={onPress}>
      <View style={styles.loaderSection}>
        {loading && <ActivityIndicator style={styles.activityIndicator} />}
        {title && (
          <Text
            style={
              ([styles.textTitle], {color: disabled ? 'black' : colors.white})
            }>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

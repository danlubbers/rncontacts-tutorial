import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import styles from './MessageStyles';

const Message = ({
  message,
  retry,
  retryFn,
  onDismiss,
  primary,
  info,
  success,
  danger,
}) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const getBackgroundColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (info) {
      return colors.secondary;
    }
    if (success) {
      return colors.success;
    }
    if (danger) {
      return colors.danger;
    }
  };
  return (
    <>
      {isDismissed ? null : (
        <TouchableOpacity
          style={[
            styles.messageContainer,
            {backgroundColor: getBackgroundColor()},
          ]}>
          <View style={styles.textWrapper}>
            <Text style={styles.textTitle}>{message}</Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={styles.retry}>Retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setIsDismissed(true);
                  onDismiss();
                }}>
                <Text style={styles.retry}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;

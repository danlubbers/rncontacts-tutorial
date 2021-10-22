import React, {forwardRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './UploadImageStyles';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '../Icon/Icon';
import colors from '../../assets/theme/colors';

const UploadImage = forwardRef(({}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: (
        <Icon name="camera" color={colors.grey} size={21} onPress={() => {}} />
      ),
    },
    {
      name: 'Choose from gallery',
      icon: (
        <Icon name="image" color={colors.grey} size={21} onPress={() => {}} />
      ),
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={175}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <View style={styles.uploadImageWrapper}>
        {options.map(({name, icon, onPress}) => {
          return (
            <TouchableOpacity key={name} style={styles.infoWrapper}>
              {icon}
              <Text style={styles.imageText}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </RBSheet>
  );
});

export default UploadImage;

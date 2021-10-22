import React, {forwardRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './UploadImageStyles';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '../Icon/Icon';
import colors from '../../assets/theme/colors';
import ImagePicker from 'react-native-image-crop-picker';

const UploadImage = forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: (
        <Icon
          name="camera"
          color={colors.grey}
          size={21}
          onPress={() => {
            ImagePicker.openCamera({
              width: 300,
              height: 300,
              cropping: true,
              freeStyleCropEnabled: true,
            })
              .then(images => {
                onFileSelected(images);
              })
              .catch(err => console.error(err));
          }}
        />
      ),
    },
    {
      name: 'Choose from gallery',
      icon: <Icon name="image" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(err => console.error(err));
      },
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={175}
      openDuration={250}
      closeOnDragDown={true}
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <View style={styles.uploadImageWrapper}>
        {options.map(({name, icon, onPress}) => {
          return (
            <TouchableOpacity
              key={name}
              style={styles.infoWrapper}
              onPress={onPress}>
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

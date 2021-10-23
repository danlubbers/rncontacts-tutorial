import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './SettingsStyles';
import colors from '../../assets/theme/colors';

const Settings = ({settingsOptions}) => {
  return (
    <ScrollView style={styles.settingsContainer}>
      {settingsOptions.map(({title, subTitle, onPress}) => {
        return (
          <TouchableOpacity key={title}>
            <View style={styles.textWrapper}>
              <Text style={styles.textTitle}>{title}</Text>
              {subTitle && <Text style={styles.textSubTitle}>{subTitle}</Text>}
            </View>
            <View style={{height: 0.5, backgroundColor: colors.grey}} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Settings;

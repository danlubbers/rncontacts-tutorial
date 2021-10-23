import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './SettingsStyles';
import colors from '../../assets/theme/colors';
import AppModal from '../AppModal/AppModal';
import Icon from '../Icon/Icon';

const Settings = ({
  preferences,
  settingsOptions,
  isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <>
      <AppModal
        title="Sort By"
        modalBody={preferences.map(({name, selected, onPress}) => {
          return (
            <TouchableOpacity
              key={name}
              style={styles.sortByTextWrapper}
              onPress={onPress}>
              {selected && <Icon name="check" type="material" size={17} />}
              <Text
                style={
                  ([styles.sortByText], {paddingLeft: selected ? 15 : 32})
                }>
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
        modalFooter={<></>}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        closeOnTouchOutside={false}
      />

      <ScrollView style={styles.settingsContainer}>
        {settingsOptions.map(({title, subTitle, onPress}) => {
          return (
            <TouchableOpacity key={title} onPress={onPress}>
              <View style={styles.textWrapper}>
                <Text style={styles.textTitle}>{title}</Text>
                {subTitle && (
                  <Text style={styles.textSubTitle}>{subTitle}</Text>
                )}
              </View>
              <View style={{height: 0.5, backgroundColor: colors.grey}} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Settings;

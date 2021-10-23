import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingsComponent from '../components/Settings/Settings';

const Settings = () => {
  const [email, setEmail] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSorted, setIsSorted] = useState(null);

  const saveSettings = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  const settingsOptions = [
    {title: 'My Info', subTitle: 'Setup your profile', onPress: () => {}},
    {title: 'Accounts', subTitle: null, onPress: () => {}},
    {
      title: 'Default account for new contacts',
      subTitle: email,
      onPress: () => {},
    },
    {title: 'Contacts to display', subTitle: 'All contacts', onPress: () => {}},
    {
      title: 'Sort by',
      subTitle: isSorted,
      onPress: () => setIsModalVisible(true),
    },
    {title: 'Name Format', subTitle: 'First Name first', onPress: () => {}},
    {title: 'Import', subTitle: null, onPress: () => {}},
    {title: 'Export', subTitle: null, onPress: () => {}},
    {title: 'Blocked Numbers', subTitle: null, onPress: () => {}},
    {title: 'About Contaxts', subTitle: null, onPress: () => {}},
  ];

  const preferences = [
    {
      name: 'First Name',
      selected: isSorted === 'First Name',
      onPress: () => {
        saveSettings('sortBy', 'First Name');
        setIsSorted('First Name');
        setIsModalVisible(false);
      },
    },
    {
      name: 'Last Name',
      selected: isSorted === 'Last Name',
      onPress: () => {
        saveSettings('sortBy', 'Last Name');
        setIsSorted('Last Name');
        setIsModalVisible(false);
      },
    },
  ];

  const getSettings = async () => {
    const user = await AsyncStorage.getItem('user');
    const sortBy = await AsyncStorage.getItem('sortBy');
    setEmail(JSON.parse(user).user.email);
    setIsSorted(sortBy);
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <SettingsComponent
      preferences={preferences}
      settingsOptions={settingsOptions}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    />
  );
};

export default Settings;

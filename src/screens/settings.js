import React from 'react';
import SettingsComponent from '../components/Settings/Settings';

const Settings = () => {
  const settingsOptions = [
    {title: 'My Info', subTitle: 'Setup your profile', onPress: () => {}},
    {title: 'Accounts', subTitle: null, onPress: () => {}},
    {
      title: 'Default account for new contacts',
      subTitle: 'Saaasdkf@app.com',
      onPress: () => {},
    },
    {title: 'Contacts to display', subTitle: 'All contacts', onPress: () => {}},
    {title: 'Sort by', subTitle: 'First Name', onPress: () => {}},
    {title: 'Name Format', subTitle: 'First Name first', onPress: () => {}},
    {title: 'Import', subTitle: null, onPress: () => {}},
    {title: 'Export', subTitle: null, onPress: () => {}},
    {title: 'Blocked Numbers', subTitle: null, onPress: () => {}},
    {title: 'About Contaxts', subTitle: null, onPress: () => {}},
  ];
  return <SettingsComponent settingsOptions={settingsOptions} />;
};

export default Settings;

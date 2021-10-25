import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_LIST,
  CONTACT_DETAIL,
  CREATE_CONTACT,
  SETTINGS,
  LOGOUT,
} from '../constants/routeNames';
import Contacts from '../screens/contacts';
import ContactDetails from '../screens/contactDetails';
import CreateContact from '../screens/createContact';
import Settings from '../screens/settings';
import Logout from '../screens/logout';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
      <HomeStack.Screen name={LOGOUT} component={Logout} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

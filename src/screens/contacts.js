import React, {useState, useEffect, useContext, useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import ContactsComponent from '../components/Contacts/Contacts';
import Icon from '../components/Icon/Icon';
import getContacts from '../context/actions/getContacts';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Contacts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {setOptions, toggleDrawer} = useNavigation();
  const [sortBy, setSortBy] = useState(null);

  const {contactState, contactDispatch} = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactDispatch);
  }, []);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSettings();
      return () => {};
    }, []),
  );

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon type="material" name="menu" size={25} style={{padding: 10}} />
        </TouchableOpacity>
      ),
    });
  }, [setOptions, toggleDrawer]);
  return (
    <ContactsComponent
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      data={contactState.getContacts.data}
      loading={contactState.getContacts.loading}
      sortBy={sortBy}
    />
  );
};

export default Contacts;

import React, {useState, useEffect, useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ContactsComponent from '../components/Contacts/Contacts';
import Icon from '../components/Icon/Icon';
import getContacts from '../context/actions/getContacts';
import {GlobalContext} from '../context/Provider';

const Contacts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {setOptions, toggleDrawer} = useNavigation();

  const {contactState, contactDispatch} = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactDispatch);
  }, []);

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
    />
  );
};

export default Contacts;

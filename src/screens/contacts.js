import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ContactsComponent from '../components/Contacts/Contacts';
import Icon from '../components/Icon/Icon';

const Contacts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {setOptions, toggleDrawer} = useNavigation();

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
    />
  );
};

export default Contacts;

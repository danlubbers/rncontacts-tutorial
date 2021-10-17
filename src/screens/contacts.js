import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../components/Container/Container';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Text style={{padding: 15}}>Nav</Text>
        </TouchableOpacity>
      ),
    });
  }, [setOptions, toggleDrawer]);
  return (
    <Container>
      <Text>Hi from Contacts</Text>
    </Container>
  );
};

export default Contacts;

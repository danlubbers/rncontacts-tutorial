import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../AppModal/AppModal';
import CustomButton from '../CustomButton/CustomButton';

const ContactsComponent = ({isModalVisible, setIsModalVisible}) => {
  return (
    <View>
      <AppModal
        title="My Profile!"
        modalBody={
          <View>
            <Text>Modal Body</Text>
          </View>
        }
        modalFooter={<></>}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <CustomButton
        title="Open Modal"
        secondary
        onPress={() => setIsModalVisible(true)}
      />
    </View>
  );
};

export default ContactsComponent;

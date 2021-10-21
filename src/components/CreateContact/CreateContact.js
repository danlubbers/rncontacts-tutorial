import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CreateContactStyles';
import Container from '../Container/Container';
import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/genericConstants';

const CreateContact = () => {
  return (
    <View style={styles.createContactContainer}>
      <Container>
        <Image style={styles.contactImage} source={{uri: DEFAULT_IMAGE_URI}} />
        <Text style={styles.imageText}>Upload Image</Text>
        <Input label="First Name" placeholder="Enter First Name" />
        <Input label="Last Name" placeholder="Enter Last Name" />
        <Input
          label="Phone Number"
          placeholder="Enter Phone Number"
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withEmoji
              onSelect={() => {}}
            />
          }
          iconPosition="left"
          style={{paddingLeft: 10}}
        />

        <CustomButton primary title="Submit" />
      </Container>
    </View>
  );
};

export default CreateContact;

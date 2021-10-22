import React from 'react';
import {View, Text, Image, Switch, SwitchComponent} from 'react-native';
import styles from './CreateContactStyles';
import Container from '../Container/Container';
import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/genericConstants';
import colors from '../../assets/theme/colors';

const CreateContact = ({
  onChangeText,
  onSubmit,
  form,
  setForm,
  loading,
  error,
  toggleValueChange,
}) => {
  console.log(error);
  return (
    <View style={styles.createContactContainer}>
      <Container>
        <Image style={styles.contactImage} source={{uri: DEFAULT_IMAGE_URI}} />
        <Text style={styles.imageText}>Upload Image</Text>
        <Input
          label="First Name"
          placeholder="Enter First Name"
          onChangeText={value => {
            onChangeText({name: 'firstName', value: value});
          }}
          error={error?.first_name?.[0]}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          onChangeText={value => {
            onChangeText({name: 'lastName', value: value});
          }}
          error={error?.last_name?.[0]}
        />
        <Input
          label="Phone Number"
          placeholder="Enter Phone Number"
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.cca2 || null}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={countryData => {
                const countryCode = countryData.callingCode[0];
                const cca2 = countryData.cca2;

                setForm({...form, country_code: countryCode, cca2: cca2});
              }}
            />
          }
          iconPosition="left"
          style={{paddingLeft: 10}}
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
          error={error?.phone_number?.[0]}
        />
        <View style={styles.switchWrapper}>
          <Text style={styles.switchText}>Add to Favorites</Text>
          <Switch
            trackColor={{false: 'blue', true: colors.primary}}
            thumbColor={'#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>

        <CustomButton
          primary
          title="Submit"
          onPress={onSubmit}
          loading={loading}
          disabled={loading}
        />
      </Container>
    </View>
  );
};

export default CreateContact;

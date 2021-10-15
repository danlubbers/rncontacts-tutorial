import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './RegisterStyles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import Container from '../Container/Container';
import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';

const RegisterComponent = ({onSubmit, onChange, form, error}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            error={error.username}
          />
          <Input
            label="First Name"
            placeholder="Enter First Name"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={error.firstName}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={error.lastName}
          />
          <Input
            label="Email"
            placeholder="Enter Email Address"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={error.email}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={error.password}
          />
        </View>
        <CustomButton onPress={onSubmit} secondary title="Submit" />

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an account</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;

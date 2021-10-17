import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './LoginStyles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import Container from '../Container/Container';
import Message from '../Message/Message';
import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';

const LoginComponent = () => {
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
        <Text style={styles.subTitle}> Please login here</Text>

        <Message
          retry
          retryFn={() => console.log('retry bitch')}
          message="Invalid Credentials"
          primary
          onDismiss={() => {
            console.log('HIT Dismiss');
          }}
        />

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            // icon={<Text>HIDE</Text>}
            iconPosition="right"
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            // error={'This field is required!!!'}
          />
        </View>
        <CustomButton secondary title="Submit" />

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new account</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;

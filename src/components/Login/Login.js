import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './LoginStyles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import Container from '../Container/Container';
import Message from '../Message/Message';
import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';

const LoginComponent = ({
  onSubmit,
  onChange,
  onDismiss,
  form,
  loading,
  error,
  errors,
  justSignedUp,
}) => {
  const {navigate} = useNavigation();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

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

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              retry
              onDismiss={() => {}}
              success
              message="Account created Successfully"
            />
          )}

          {/* When we CONNECT to the server and get ERRORS */}
          {error && !error?.error && (
            <Message
              retry
              onDismiss={() => {}}
              danger
              message="Invalid Credentials"
            />
          )}

          {/* This error is when user is unable to connect to the server */}
          {error?.error && (
            <Message retry onDismiss={() => {}} danger message={error?.error} />
          )}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            value={form.username || null}
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            icon={
              <TouchableOpacity
                onPress={() => setIsPasswordHidden(prev => !prev)}>
                <Text>{isPasswordHidden ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={isPasswordHidden}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />
        </View>
        <CustomButton
          title="Submit"
          onPress={onSubmit}
          loading={loading}
          secondary
        />

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

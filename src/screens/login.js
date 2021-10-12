import React, {useState} from 'react';
import {Text} from 'react-native';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';

const Login = () => {
  const [isText, setIsText] = useState('');
  return (
    <Container>
      <Input
        label="Username"
        input={isText}
        setIsText={text => setIsText(text)}
        // icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
      <Input
        label="Password"
        input={isText}
        setIsText={text => setIsText(text)}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        // error={'This field is required!!!'}
      />
    </Container>
  );
};

export default Login;

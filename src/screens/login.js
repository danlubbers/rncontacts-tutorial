import React, {useState} from 'react';
import LoginComponent from '../components/Login/Login';

const Login = () => {
  const [isText, setIsText] = useState('');
  return <LoginComponent />;
};

export default Login;

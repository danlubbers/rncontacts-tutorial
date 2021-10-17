import React, {useState, useContext} from 'react';
import LoginComponent from '../components/Login/Login';
import loginContext from '../context/actions/loginContext';
import {GlobalContext} from '../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const {authState, authDispatch} = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.username && form.password) {
      loginContext(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={authState.error}
      loading={authState.loading}
    />
  );
};

export default Login;

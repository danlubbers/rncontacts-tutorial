import React, {useState, useContext, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import LoginComponent from '../components/Login/Login';
import loginContext from '../context/actions/loginContext';
import {GlobalContext} from '../context/Provider';

const Login = () => {
  const {authState, authDispatch} = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      console.log('PARAMS', params);
      setJustSignedUp(true);
      setForm({...form, username: params.data.username});
    }
  }, [params]);

  const onSubmit = () => {
    if (form.username && form.password) {
      loginContext(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={authState.error}
      loading={authState.loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;

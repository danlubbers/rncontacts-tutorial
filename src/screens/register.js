import React, {useState, useContext} from 'react';
import RegisterComponent from '../components/Register/Register';
import registerContext from '../context/actions/registerContext';
import {GlobalContext} from '../context/Provider';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {authState, authDispatch} = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    // Remove errors after user inputs information
    if (value !== '') {
      if (name === 'password' && value.length < 6) {
        setErrors(prev => {
          return {
            ...prev,
            [name]: 'This field requires a minimum of 6 characters!',
          };
        });
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: `${name} field is required!`};
      });
    }
  };

  const onSubmit = () => {
    // Validations
    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Please add a username!'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add your First Name!'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add your Last Name!'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add your email address!'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add your password!'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      registerContext(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={authState.error}
      loading={authState.loading}
    />
  );
};

export default Register;

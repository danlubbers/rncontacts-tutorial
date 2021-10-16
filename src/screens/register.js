import React, {useState, useEffect} from 'react';
import RegisterComponent from '../components/Register/Register';
import axiosInstance from '../helpers/axiosInterceptor';

const Register = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    axiosInstance.post('/contacts').catch(err => console.log(err));
  }, []);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    // Remove errors after user inputs information
    if (value !== '') {
      if (name === 'password' && value.length < 6) {
        setError(prev => {
          return {
            ...prev,
            [name]: 'This field requires a minimum of 6 characters!',
          };
        });
      } else {
        setError(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setError(prev => {
        return {...prev, [name]: `${name} field is required!`};
      });
    }
  };

  const onSubmit = () => {
    // Validations
    if (!form.username) {
      setError(prev => {
        return {...prev, username: 'Please add a username!'};
      });
    }
    if (!form.firstName) {
      setError(prev => {
        return {...prev, firstName: 'Please add your First Name!'};
      });
    }
    if (!form.lastName) {
      setError(prev => {
        return {...prev, lastName: 'Please add your Last Name!'};
      });
    }
    if (!form.email) {
      setError(prev => {
        return {...prev, email: 'Please add your email address!'};
      });
    }
    if (!form.password) {
      setError(prev => {
        return {...prev, password: 'Please add your password!'};
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
    />
  );
};

export default Register;

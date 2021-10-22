import React, {useState, useContext} from 'react';
import {CONTACT_LIST} from '../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../context/Provider';
import createContact from '../context/actions/createContact';
import CreateContactComponent from '../components/CreateContact/CreateContact';

const CreateContact = () => {
  const {navigate} = useNavigation();
  const {
    contactState: {
      createContact: {loading, error},
    },
    contactDispatch,
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    createContact(form)(contactDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      onSubmit={onSubmit}
      form={form}
      setForm={setForm}
      loading={loading}
      error={error}
      toggleValueChange={toggleValueChange}
    />
  );
};

export default CreateContact;

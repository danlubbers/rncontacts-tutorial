import React, {useState, useContext, useRef} from 'react';
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

  const sheetRef = useRef();

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

  const openSheet = () => {
    console.log('REF', sheetRef.current.open());
    if (sheetRef.current) {
      sheetRef.current.open;
    }
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
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
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
    />
  );
};

export default CreateContact;

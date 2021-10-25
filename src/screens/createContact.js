import React, {useState, useContext, useRef, useEffect} from 'react';
import {CONTACT_LIST} from '../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../context/Provider';
import createContact from '../context/actions/createContact';
import CreateContactComponent from '../components/CreateContact/CreateContact';
import uploadImage from '../helpers/uploadImage';

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
  const [isUploading, setIsUploading] = useState(false);
  const [localFile, setLocalFile] = useState(null);

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    // console.log('createCONTACT FORM', form);

    if (localFile?.size) {
      // console.log('WE HAVE THE LOCAL FILE', localFile);
      setIsUploading(true);
      uploadImage(localFile)(url => {
        setIsUploading(false);

        createContact({...form, contactPicture: url})(contactDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      })(err => {
        console.log('err', err);
        setIsUploading(false);
      });
    }
    createContact(form)(contactDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const onFileSelected = image => {
    closeSheet();
    setForm({...form, sourceURL: image.sourceURL});
    setLocalFile(image);
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      onSubmit={onSubmit}
      form={form}
      setForm={setForm}
      loading={loading || isUploading}
      error={error}
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;

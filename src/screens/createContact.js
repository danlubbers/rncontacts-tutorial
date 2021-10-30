import React, {useState, useContext, useRef, useEffect} from 'react';
import {CONTACT_LIST, CONTACT_DETAIL} from '../constants/routeNames';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GlobalContext} from '../context/Provider';
import createContact from '../context/actions/createContact';
import editContact from '../context/actions/editContact';
import CreateContactComponent from '../components/CreateContact/CreateContact';
import uploadImage from '../helpers/uploadImage';
import countryCodes from '../utils/countryCodes';

const CreateContact = () => {
  const sheetRef = useRef();
  const {navigate, setOptions} = useNavigation();
  const {params} = useRoute();
  const {
    contactState: {
      createContact: {loading, error},
    },
    contactDispatch,
  } = useContext(GlobalContext);

  const [form, setForm] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [localFile, setLocalFile] = useState(null);

  useEffect(() => {
    setOptions({
      title: 'Update Contact',
    });

    // console.log(params?.contactDetails);
    if (params?.contactDetails) {
      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        is_favorite: isFavorite,
        country_code: countryCode,
      } = params?.contactDetails;
      setForm(prev => {
        return {
          ...prev,
          firstName,
          lastName,
          phoneNumber,
          isFavorite,
          countryCode,
        };
      });

      const country = countryCodes.find(item => {
        return item.value.replace('+', '') === countryCode;
      });

      if (country) {
        setForm(prev => {
          return {
            ...prev,
            cca2: country.key.toUpperCase(),
          };
        });
      }
      if (params?.contactDetails.contact_picture) {
        setLocalFile(params?.contactDetails.contact_picture);
      }
      // console.log('EFFECT LOCAL', localFile);
    }
  }, []);

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    // console.log('createCONTACT FORM', form);

    if (params?.contactDetails) {
      // console.log(localFile?.size);
      if (localFile?.size) {
        // console.log('WE HAVE THE LOCAL FILE', localFile);
        setIsUploading(true);
        uploadImage(localFile)(url => {
          setIsUploading(false);

          editContact(
            {...form, contactPicture: url},
            params?.contactDetails.id,
          )(contactDispatch)(item => {
            navigate(CONTACT_DETAIL, {item});
          });
        })(err => {
          console.log('err', err);
          setIsUploading(false);
        });
      } else {
        editContact(form, params?.contactDetails.id)(contactDispatch)(item => {
          // console.log('OnSUCCESS ITEM', item);
          return navigate(CONTACT_DETAIL, {item});
        });
      }
    } else {
      if (localFile?.size) {
        // console.log('WE HAVE THE LOCAL FILE without an image', localFile);
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
      } else {
        createContact(form)(contactDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      }
    }
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

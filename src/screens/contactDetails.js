import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import Icon from '../components/Icon/Icon';
import {useRoute, useNavigation} from '@react-navigation/native';
import ContactDetailsComponent from '../components/ContactDetails/ContactDetails';
import colors from '../assets/theme/colors';
import {GlobalContext} from '../context/Provider';
import deleteContact from '../context/actions/deleteContact';
import editContact from '../context/actions/editContact';
import uploadImage from '../helpers/uploadImage';
import {CONTACT_LIST} from '../constants/routeNames';

const ContactDetails = () => {
  const sheetRef = useRef();
  const {params} = useRoute();
  const {setOptions, navigate} = useNavigation();
  const {
    contactState: {
      deleteContact: {loading},
    },
    contactDispatch,
  } = useContext(GlobalContext);

  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [uploadSucceeded, setUploadSucceeded] = useState(false);
  const [localFile, setLocalFile] = useState(null);

  useEffect(() => {
    if (params.item) {
      setOptions({
        title: `${params.item.first_name} ${params.item.last_name}`,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', paddingRight: 10}}>
              <TouchableOpacity>
                <Icon
                  name={params.item.is_favorite ? 'star' : 'star-border'}
                  type="material"
                  size={21}
                  color={colors.grey}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => {
                  Alert.alert(
                    'Delete!',
                    `Are you sure you want to delete ${params.item.first_name} ${params.item.last_name}?`,
                    [
                      {text: 'Cancel', onPress: () => {}},
                      {
                        text: 'OK',
                        onPress: () => {
                          deleteContact(params.item.id)(contactDispatch)(() => {
                            navigate(CONTACT_LIST);
                          });
                        },
                      },
                    ],
                  );
                }}>
                {loading ? (
                  <ActivityIndicator />
                ) : (
                  <Icon
                    name="delete"
                    type="material"
                    size={21}
                    color={colors.grey}
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [params.item, loading]);

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
    setLocalFile(image);
    setIsUploadingImage(true);

    uploadImage(image)(url => {
      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        is_favorite: isFavorite,
        country_code: cca2,
      } = params.item;

      editContact(
        {
          firstName,
          lastName,
          phoneNumber,
          isFavorite,
          cca2,
          contactPicture: url,
        },
        params?.item.id,
      )(contactDispatch)(item => {
        setIsUploadingImage(false);
        setUploadSucceeded(true);
      });
    })(err => {
      console.log('err', err);
      setIsUploadingImage(false);
    });
  };

  return (
    <ContactDetailsComponent
      contactDetails={params.item}
      sheetRef={sheetRef}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
      isUploadingImage={isUploadingImage}
      uploadSucceeded={uploadSucceeded}
    />
  );
};

export default ContactDetails;

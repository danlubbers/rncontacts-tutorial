import React, {useEffect, useContext} from 'react';
import {View, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import Icon from '../components/Icon/Icon';
import {useRoute, useNavigation} from '@react-navigation/native';
import ContactDetailsComponent from '../components/ContactDetails/ContactDetails';
import colors from '../assets/theme/colors';
import {GlobalContext} from '../context/Provider';
import deleteContact from '../context/actions/deleteContact';
import {CONTACT_LIST} from '../constants/routeNames';

const ContactDetails = () => {
  const {params} = useRoute();
  const {setOptions, navigate} = useNavigation();
  const {
    contactState: {
      deleteContact: {loading},
    },
    contactDispatch,
  } = useContext(GlobalContext);

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

  return <ContactDetailsComponent contactDetails={params.item} />;
};

export default ContactDetails;

import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from '../components/Icon/Icon';
import {useRoute, useNavigation} from '@react-navigation/native';
import ContactDetailsComponent from '../components/ContactDetails/ContactDetails';
import colors from '../assets/theme/colors';

const ContactDetails = () => {
  const {params} = useRoute();
  const {setOptions} = useNavigation();

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
              <TouchableOpacity style={{paddingLeft: 10}}>
                <Icon
                  name="delete"
                  type="material"
                  size={21}
                  color={colors.grey}
                />
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [params.item]);

  return <ContactDetailsComponent contactDetails={params.item} />;
};

export default ContactDetails;

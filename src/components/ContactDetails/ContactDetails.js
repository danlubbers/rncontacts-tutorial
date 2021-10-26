import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './ContactDetailsStyles';
import colors from '../../assets/theme/colors';

import ImageComponent from '../Image/Image';
import Icon from '../Icon/Icon';
import {useNavigation} from '@react-navigation/native';

const ContactDetails = ({contactDetails}) => {
  const {navigate} = useNavigation();
  const {contact_picture, first_name, last_name, country_code, phone_number} =
    contactDetails;
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.contactDetailsContainer}>
        {contact_picture && <ImageComponent src={contact_picture} />}
        <View style={styles.infoWrapper}>
          <Text style={styles.fullName}>
            {first_name} {last_name}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactDetails;

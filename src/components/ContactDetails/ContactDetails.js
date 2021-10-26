import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './ContactDetailsStyles';
import colors from '../../assets/theme/colors';
import ImageComponent from '../Image/Image';
import CustomButton from '../CustomButton/CustomButton';
import Icon from '../Icon/Icon';
import {useNavigation} from '@react-navigation/native';
import {CREATE_CONTACT} from '../../constants/routeNames';

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
          <View style={styles.hrLine} />

          <View style={styles.topCallOptions}>
            <TouchableOpacity style={styles.topCallOption}>
              <Icon
                type="ionicon"
                name="call-outline"
                color={colors.primary}
                size={27}
              />
              <Text style={styles.middleText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topCallOption}>
              <Icon
                type="materialCommunity"
                name="message-text"
                color={colors.primary}
                size={27}
              />
              <Text style={styles.middleText}>Text</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topCallOption}>
              <Icon
                type="materialCommunity"
                name="video"
                color={colors.primary}
                size={27}
              />
              <Text style={styles.middleText}>Video</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.middleCallOptions}>
            <Icon
              type="ionicon"
              name="call-outline"
              color={colors.grey}
              size={27}
            />
            <View style={styles.phoneMobile}>
              <Text>{phone_number}</Text>
              <Text>Mobile</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                type="materialCommunity"
                name="video"
                color={colors.primary}
                size={27}
              />
              <Icon
                type="materialCommunity"
                name="message-text"
                color={colors.primary}
                size={27}
                style={[styles.msgIcon]}
              />
            </View>
          </View>
          <CustomButton
            style={{alignSelf: 'flex-end', marginRight: 20, width: 200}}
            primary
            title="Edit Contact"
            onPress={() => {
              navigate(CREATE_CONTACT, {contactDetails, editing: true});
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactDetails;

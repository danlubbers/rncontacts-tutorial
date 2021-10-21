import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityComponent,
} from 'react-native';
import styles from './ContactsStyles';
import colors from '../../assets/theme/colors';
import AppModal from '../AppModal/AppModal';
import Message from '../Message/Message';
import Icon from '../Icon/Icon';
import {useNavigation} from '@react-navigation/native';
import {CREATE_CONTACT} from '../../constants/routeNames';

const ContactsComponent = ({
  data,
  loading,
  isModalVisible,
  setIsModalVisible,
}) => {
  const {navigate} = useNavigation();
  const ListEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponentContainer}>
        <Message info message="No contacts were found!" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, phone_number, country_code} =
      item;

    return (
      <TouchableOpacity style={styles.renderItemsContainer}>
        <View style={styles.renderItemsWrapper}>
          {contact_picture ? (
            <Image style={styles.image} source={{uri: contact_picture}} />
          ) : (
            <View style={styles.noImage}>
              <Text style={([styles.name], {color: colors.white})}>
                {first_name[0]}
              </Text>
              <Text style={([styles.name], {color: colors.white})}>
                {last_name[0]}
              </Text>
            </View>
          )}
          <View style={styles.infoWraper}>
            <View style={styles.nameWrapper}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${country_code} ${phone_number}`}</Text>
          </View>
        </View>
        <Icon name="right" type="ant" size={17} color={colors.grey} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.contactsContainer}>
        <AppModal
          title="My Profile!"
          modalBody={
            <View>
              <Text>Modal Body</Text>
            </View>
          }
          modalFooter={<></>}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />

        {loading && (
          <View style={styles.activityContainer}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}

        {!loading && (
          <View style={styles.flatListWrapper}>
            <FlatList
              data={data}
              renderItem={renderItem}
              ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: colors.grey}} />
              )}
              keyExtractor={item => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={styles.footerWrapper}></View>}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.floatingActionBtn}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon name="plus" primary color={colors.white} size={21} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;

import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './ContactsStyles';
import colors from '../../assets/theme/colors';
import AppModal from '../AppModal/AppModal';
import Message from '../Message/Message';
import Icon from '../Icon/Icon';

const ContactsComponent = ({
  data,
  loading,
  isModalVisible,
  setIsModalVisible,
}) => {
  console.log('CONTACTDATA', data);
  const ListEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponentContainer}>
        <Message info message="No contacts were found!" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, phone_number} = item;

    return (
      <TouchableOpacity style={styles.contactContainer}>
        <View style={styles.contactWrapper}>
          {contact_picture ? (
            <Image style={styles.image} source={{uri: contact_picture}} />
          ) : (
            <View style={styles.noImage} />
          )}

          <View style={styles.nameWrapper}>
            <Text>{first_name}</Text>
            <Text>{last_name}</Text>
            <Text>{phone_number}</Text>
          </View>
        </View>
        <Icon name="right" type="ant" />
      </TouchableOpacity>
    );
  };
  return (
    <View>
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
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={styles.footerWrapper}></View>}
          />
        </View>
      )}
    </View>
  );
};

export default ContactsComponent;

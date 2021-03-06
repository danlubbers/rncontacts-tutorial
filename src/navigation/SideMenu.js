import React from 'react';
import styles from './SideMenuStyles.js';
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import Container from '../components/Container/Container';
import {SETTINGS} from '../constants/routeNames';
import logoutUser from '../context/actions/logoutContext';
import Icon from '../components/Icon/Icon';

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'OK',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="fontisto" name="player-settings" size={17} />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="material" name="logout" size={17} />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          style={styles.logoImage}
          source={require('./../assets/images/logo.png')}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.menuItemsWrapper}
              onPress={onPress}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;

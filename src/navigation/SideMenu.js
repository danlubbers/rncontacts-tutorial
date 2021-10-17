import React from 'react';
import styles from './SideMenuStyles.js';
import {TouchableOpacity, SafeAreaView, Text, View, Image} from 'react-native';
import Container from '../components/Container/Container';
import {SETTINGS} from '../constants/routeNames';

const SideMenu = ({navigation}) => {
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>T</Text>,
      name: 'Logout',
      onPress: () => {},
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

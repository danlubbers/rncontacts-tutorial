import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';
import {ActivityIndicator} from 'react-native';
import {navigationRef} from './RootNavigator';
import SplashScreen from 'react-native-splash-screen';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setIsAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setIsAuthenticated(true);
        setIsAuthLoaded(true);
      } else {
        setIsAuthenticated(false);
        setIsAuthLoaded(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  useEffect(() => {
    if (authLoaded) {
      SplashScreen.hide();
    }
  }, [authLoaded]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;

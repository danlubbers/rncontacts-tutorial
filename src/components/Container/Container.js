import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './ContainerStyles';

const Container = ({children}) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>{children}</View>
    </ScrollView>
  );
};

export default Container;

import React, {useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import styles from './ImageStyles';

const ImageComponent = ({src}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const onLoadStart = () => setIsLoading(true);
  const onLoadEnd = () => setIsLoading(false);
  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <View style={styles.ImageContainer}>
      {isLoading && <ActivityIndicator />}
      <View>
        <Image
          style={styles.imageDetail}
          source={{uri: src}}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onError}
        />
      </View>
    </View>
  );
};

export default ImageComponent;

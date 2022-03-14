import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const Brand = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/brand.png')}
      />
    </View>
  );
};
export default Brand;

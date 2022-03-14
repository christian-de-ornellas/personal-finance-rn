import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const Brand = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: '/Users/christianpossidonio/Projects/ExpertDeveloper/myMoney/src/assets/brand.png',
        }}
      />
    </View>
  );
};
export default Brand;

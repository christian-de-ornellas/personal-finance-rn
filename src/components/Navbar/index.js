import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles.js';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image
          style={styles.img}
          source={{
            uri: '/Users/christianpossidonio/Projects/ExpertDeveloper/myMoney/src/assets/wallet.png',
          }}
        />
      </View>
      <View style={styles.icon}>
        <Image
          style={styles.img}
          source={{
            uri: '/Users/christianpossidonio/Projects/ExpertDeveloper/myMoney/src/assets/card-credit.png',
          }}
        />
      </View>
      <View style={styles.homeIcon}>
        <Image
          style={styles.homeImg}
          source={{
            uri: '/Users/christianpossidonio/Projects/ExpertDeveloper/myMoney/src/assets/home.png',
          }}
        />
      </View>
      <View style={styles.icon}>
        <Image
          style={styles.img}
          source={{
            uri: '/Users/christianpossidonio/Projects/ExpertDeveloper/myMoney/src/assets/calendar.png',
          }}
        />
      </View>
      <View style={styles.icon}>
        <Image
          style={styles.img}
          source={{
            uri: '/Users/christianpossidonio/Projects/ExpertDeveloper/myMoney/src/assets/search.png',
          }}
        />
      </View>
    </View>
  );
};

export default Navbar;

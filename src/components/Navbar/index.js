import React from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import styles from './styles.js';

const Navbar = ({reactNavigationProps}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => reactNavigationProps.navigate('Revenue')}>
        <View style={styles.icon}>
          <Image
            style={styles.img}
            source={require('../../assets/wallet.png')}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => reactNavigationProps.navigate('Expense')}>
        <View style={styles.icon}>
          <Image
            style={styles.img}
            source={require('../../assets/card-credit.png')}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => reactNavigationProps.navigate('Home')}>
        <View style={styles.homeIcon}>
          <Image
            style={styles.homeImg}
            source={require('../../assets/home.png')}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => reactNavigationProps.navigate('Budge')}>
        <View style={styles.icon}>
          <Image
            style={styles.img}
            source={require('../../assets/calendar.png')}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => reactNavigationProps.navigate('Extract')}>
        <View style={styles.icon}>
          <Image
            style={styles.img}
            source={require('../../assets/search.png')}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Navbar;

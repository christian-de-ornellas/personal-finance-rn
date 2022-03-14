import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import Navbar from '../../components/Navbar';
import Brand from '../../components/Brand';
import styles from './styles';

const Budge = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Brand />
      <View style={styles.budge}>
        <Text>oi</Text>
      </View>
      <Navbar reactNavigationProps={navigation} />
    </SafeAreaView>
  );
};

export default Budge;

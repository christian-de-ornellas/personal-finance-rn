import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import Navbar from '../../components/Navbar';
import Brand from '../../components/Brand';
import styles from './styles';

const Extract = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Brand />
      <View style={styles.extract}>
        <Text>oi</Text>
      </View>
      <Navbar reactNavigationProps={navigation} />
    </SafeAreaView>
  );
};

export default Extract;

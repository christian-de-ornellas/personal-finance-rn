import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Card = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Card;

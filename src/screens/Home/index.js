import React from 'react';
import {View} from 'react-native';

import Card from '../../components/Card';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Card title="Saldo" value="R$ 1.000,00" />
      </View>
      <View style={styles.row}>
        <Card title="Orçamento" value="R$ 7.5000,00" />
        <Card title="Despesas" value="R$ 6.500,00" />
      </View>
      <View style={styles.column}>
        <Card title="Receitas" value="R$ 9.600,00" />
      </View>
    </View>
  );
};

export default Home;

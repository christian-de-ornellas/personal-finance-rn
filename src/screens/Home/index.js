import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import Brand from '../../components/Brand';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Brand />
      <View style={styles.home}>
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
      <Navbar />
    </SafeAreaView>
  );
};

export default Home;

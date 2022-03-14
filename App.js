import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import colors from './src/themes/colors';
import Home from './src/screens//Home';
import Brand from './src/components/Brand';
import Navbar from './src/components/Navbar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Brand />
      <Home />
      <Navbar />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'space-between',
  },
});

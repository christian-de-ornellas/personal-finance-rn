import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Expense from './src/screens/Expense';
import Revenue from './src/screens/Revenue';
import Budge from './src/screens/Budge';
import Extract from './src/screens/Extract';
import colors from './src/themes/colors';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.primary,
    card: colors.primary,
    text: colors.primary,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Revenue" component={Revenue} />
        <Stack.Screen name="Expense" component={Expense} />
        <Stack.Screen name="Budge" component={Budge} />
        <Stack.Screen name="Extract" component={Extract} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

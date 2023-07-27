import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../Screens/Home';
import Login from '../Screens/Login';

export type RootStackParamList = {
  home: undefined;
  login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const UnsignedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default UnsignedNavigator;

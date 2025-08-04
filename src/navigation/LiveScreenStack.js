// src/Navigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LiveScreen from '../screens/LiveStreamScreens/LiveScreen1';
import LiveStreamScreen from '../screens/LiveStreamScreens/LiveScreen2';

const Stack = createNativeStackNavigator();

const LiveStreamNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LiveScreen1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LiveScreen1" component={LiveScreen} />
      <Stack.Screen name="LiveScreen2" component={LiveStreamScreen} />
    </Stack.Navigator>
  );
};

export default LiveStreamNavigation;

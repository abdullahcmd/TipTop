// src/Navigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LiveScreen from '../screens/LiveStreamScreens/LiveScreen1';
import LiveStreamScreen from '../screens/LiveStreamScreens/LiveScreen2';
import LiveSummaryScreen from '../screens/LiveStreamScreens/LiveStreamSummaryScreen';
import LiveDiscoveryScreen from '../screens/LiveStreamScreens/LiveStreamDiscoveryScreen';
import LiveBattleScreen from '../screens/LiveStreamScreens/LIveStreamBattleScreen';

const Stack = createNativeStackNavigator();

const LiveStreamNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LiveStreamDiscovery"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="LiveStreamDiscovery"
        component={LiveDiscoveryScreen}
      />

      <Stack.Screen name="LiveScreen1" component={LiveScreen} />
      <Stack.Screen name="LiveScreen2" component={LiveStreamScreen} />
      <Stack.Screen name="LiveStreamBattle" component={LiveBattleScreen} />

      <Stack.Screen name="LiveStreamSummary" component={LiveSummaryScreen} />
    </Stack.Navigator>
  );
};

export default LiveStreamNavigation;

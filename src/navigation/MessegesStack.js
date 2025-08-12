// src/Navigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagesTabsScreen from '../screens/ChatScreens/ChatList';
import CallsScreen from '../screens/ChatScreens/CallsScreen';
import ChatScreen from '../screens/ChatScreens/ChatScreen';
import UserScreen from '../screens/UserScreen';
import LiveCallScreen from '../screens/LiveCallScreen';

const Stack = createNativeStackNavigator();

const MessegesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Messeges_Screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Messeges_Screen" component={MessagesTabsScreen} />
      <Stack.Screen name="Calls" component={CallsScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="LiveCallScreen" component={LiveCallScreen} />
    </Stack.Navigator>
  );
};

export default MessegesStack;

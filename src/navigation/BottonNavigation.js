// navigation/BottomNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Tabs/HomeScreen';
import MessagesTabsScreen from '../screens/ChatScreens/ChatList';
import ProfileScreen from '../screens/Tabs/ProfileScreen';
import CustomTabBar from '../screens/Tabs/CustomTabBar';
import LiveStreamNavigation from './LiveScreenStack';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessagesTabsScreen} />
      <Tab.Screen name="LiveStream" component={LiveStreamNavigation} />
      <Tab.Screen name="AddBox" component={MessagesTabsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

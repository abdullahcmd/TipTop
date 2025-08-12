// navigation/BottomNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Tabs/HomeScreen';
import SearchScreen from '../screens/Tabs/SearchScreen';
import NewPostScreen from '../screens/Tabs/NewPostScreen';
import ProfileScreen from '../screens/Tabs/ProfileScreen';
import CustomTabBar from '../screens/Tabs/CustomTabBar';
import LiveStreamNavigation from './LiveStreamStack';
import MessagesTabsScreen from '../screens/ChatScreens/ChatList';
import MessegesStack from './MessegesStack';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="LiveStream" component={LiveStreamNavigation} />
      <Tab.Screen name="Messeges" component={MessegesStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

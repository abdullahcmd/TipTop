// src/Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashscreen/splash';
import LanguageSelectionScreen from '../screens/LanguageScreen/LanguageScreen';
import OnboardingScreen from '../screens/onboardingScreen/onboardingScreen';
import LoginInScreen from '../screens/LoginScreen/LoginScreen';
import BottomNavigator from './BottonNavigation';
import SettingScreenNavigation from './SettingScreenStack';
import ChatScreen from '../screens/ChatScreens/ChatScreen';
import CallsScreen from '../screens/ChatScreens/CallsScreen';
import MessagesTabsScreen from '../screens/ChatScreens/ChatList';
import UserScreen from '../screens/UserScreen';
import EndLiveScreen from '../screens/EndLiveScreen';
import LiveMatch from '../screens/LiveMatch';
import LiveCallScreen from '../screens/LiveCallScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="Language_Screen"
          component={LanguageSelectionScreen}
        />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginInScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="SettingScreen" component={SettingScreenNavigation} />
        <Stack.Screen name="Messages" component={MessagesTabsScreen} />
        <Stack.Screen name="Calls" component={CallsScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="EndLiveScreen" component={EndLiveScreen} />
        <Stack.Screen name="LiveMatch" component={LiveMatch} />
        <Stack.Screen name="LiveCallScreen" component={LiveCallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

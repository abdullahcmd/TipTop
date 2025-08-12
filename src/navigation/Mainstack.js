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
import SignUpScreen from '../screens/SignUpSCreen/Index';

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
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreenNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

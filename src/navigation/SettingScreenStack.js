// src/Navigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '../screens/settingScreens/settingScreen/SettingScreen';
import AccountSettingScreen from '../screens/settingScreens/accountSettingScreen/AccountSettingScreen';
import MyQRCode from '../screens/settingScreens/myQRCodeScreen/MyQRCode';
import ScanQRCode from '../screens/settingScreens/scanQRCode/ScanQRCode';

const Stack = createNativeStackNavigator();

const SettingScreenNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="SettingScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="SettingScreen" component={SettingScreen} />
            <Stack.Screen name="AccountSettingScreen" component={AccountSettingScreen} />
            <Stack.Screen name="MyQRCode" component={MyQRCode} />
            <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
        </Stack.Navigator>
    );
};

export default SettingScreenNavigation;

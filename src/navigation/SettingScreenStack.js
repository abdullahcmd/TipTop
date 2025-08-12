// src/Navigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '../screens/settingScreens/settingScreen/SettingScreen';
import AccountSettingScreen from '../screens/settingScreens/accountSettingScreen/AccountSettingScreen';
import MyQRCode from '../screens/settingScreens/myQRCodeScreen/MyQRCode';
import ScanQRCode from '../screens/settingScreens/scanQRCode/ScanQRCode';

import BlockedUsersScreen from '../screens/settingScreens/blockedUsersScreen/BlockedUsers';
import SubscriptionScreen from '../screens/settingScreens/SubscriptionScreen/SubscriptionScreen';
import SavedPostsScreen from '../screens/settingScreens/SavedPostsScreen/SavedPostsScreen';
import NotificationScreen from '../screens/settingScreens/notificationScreen/NotificationScreen';

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
            <Stack.Screen name="BlockedUsers" component={BlockedUsersScreen} />
            <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
            <Stack.Screen name="SavedPosts" component={SavedPostsScreen} />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        </Stack.Navigator>
    );

};

export default SettingScreenNavigation;

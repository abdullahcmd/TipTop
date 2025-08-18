import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '../../components/Profile/ProfileStats';
import ProfileGallery from '../../components/Profile/ProfileGallery';
import AppSafeAreaView from '../../components/General/SafeAreaView/SafeAreaView';

const ProfileScreen = () => {
  return (
    <>
      <ProfileHeader />
      <ProfileGallery />
    </>
  );
};
export default ProfileScreen;

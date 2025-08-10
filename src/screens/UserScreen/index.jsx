import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '../../components/profile/ProfileStats';
import ProfileGallery from '../../components/profile/ProfileGallery';

const UserScreen = () => {
  return (
    <>
      <ProfileHeader />
      <ProfileGallery />
    </>
  );
};
export default UserScreen;

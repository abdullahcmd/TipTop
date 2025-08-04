import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '../../components/profile/ProfileStats';
import ProfileGallery from '../../components/profile/ProfileGallery';

const ProfileScreen = () => {
  return (
    <>
      <ProfileHeader />
      <ProfileGallery />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // recommended so gallery doesn't look transparent
  },
});

export default ProfileScreen;

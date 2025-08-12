import React from 'react';
import { StyleSheet } from 'react-native';
import AppSafeAreaView from '../../../components/General/SafeAreaView/SafeAreaView';
import Header from '../../../components/General/Headers/GeneralHeader';
import { invitedUsers } from '../../../utils/DummyData/DummyData';
import { wp } from '../../../utils/helpers/responsive';
import BlockedUsers from '../../../components/BlockedUsersItem/BlockedUsers';

const BlockedUsersScreen = () => {
  return (
    <AppSafeAreaView
      statusBarProps={{
        barStyle: 'dark-content',
        backgroundColor: 'transparent',
        translucent: true,
      }}
    >
      <Header title="Blocked Users" showBack />
      <BlockedUsers
        UsersList={invitedUsers}
        ButtonText="Unblock"
        SearchBar={false}
        style2={{ marginTop: wp(1) }}
      />
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
});

export default BlockedUsersScreen;

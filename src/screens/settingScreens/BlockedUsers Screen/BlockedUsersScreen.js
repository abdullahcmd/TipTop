import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppSafeAreaView from '../../../components/General/SafeAreaView/SafeAreaView';
import InvitedTab from '../../../components/LiveStreamComponents/BottomSheet/Tabs/InvitedTab';
import Header from '../../../components/General/Headers/GeneralHeader';
import { invitedUsers } from '../../../utils/DummyData/DummyData';
import { wp } from '../../../utils/helpers/responsive';

const BlockedUsersScreen = () => {
  return (
    <AppSafeAreaView
      statusBarProps={{ barStyle: 'dark-content', backgroundColor: 'red' }}
    >
      <Header title="Blocked Users" showBack={true} />
      <InvitedTab
        SearchBar={false}
        style2={{ marginTop: wp(1) }}
        UsersList={invitedUsers}
        ButtonText={'Unblock'}
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

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { BlockedUserItem } from '../../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const blockedUsers = [
  {
    id: '1',
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    username: 'jenny_dsouza',
    fullName: "Jenny D'souza",
  },
  {
    id: '2',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    username: 'wilson_dukes',
    fullName: 'Wilson Dukes',
  },
  {
    id: '3',
    profileImage: 'https://randomuser.me/api/portraits/women/3.jpg',
    username: 'tina_josephy',
    fullName: "Jenny D'souza",
  },
  {
    id: '4',
    profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
    username: 'stevy_cooks',
    fullName: 'Wilson Dukes',
  },
];

const BlockedUsers = ({ navigation }) => {
  const handleUnblock = username => {
    console.log(`Unblocked ${username}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={wp('6%')} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Blocked Users</Text>
      </View>

      {/* Blocked Users List */}
      <View style={styles.listContainer}>
        <FlatList
          data={blockedUsers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <BlockedUserItem
              profileImage={item.profileImage}
              username={item.username}
              fullName={item.fullName}
              onUnblock={() => handleUnblock(item.username)}
            />
          )}
          contentContainerStyle={{ paddingHorizontal: wp('4%') }}
          ItemSeparatorComponent={() => <View style={{ height: hp('1.5%') }} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('3%'),
    paddingTop: hp('2%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
  },
  headerTitle: {
    fontSize: wp('5%'),
    fontWeight: '700',
    color: '#000',
    marginLeft: wp('3%'),
  },
  listContainer: {
    flex: 1,
    marginTop: hp('2%'),
  },
});

export default BlockedUsers;

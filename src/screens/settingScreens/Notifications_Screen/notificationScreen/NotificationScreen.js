import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../../../../constants/icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NotificationItem from '../../../../components/Notifications/notificationItem/NotificationItem';

const notificationsData = [
  {
    id: '1',
    label: 'Post Likes',
    icon: icons.heart,
    keyName: 'postLikes',
  },
  {
    id: '2',
    label: 'Comments On Post',
    icon: icons.message,
    keyName: 'comments',
  },
  {
    id: '3',
    label: 'Follow',
    icon: icons.follow,
    keyName: 'follow',
  },
  {
    id: '4',
    label: 'Mentions',
    icon: icons.mention,
    keyName: 'mentions',
  },
  {
    id: '5',
    label: 'Gifts Received',
    icon: icons.gift,
    keyName: 'gifts',
  },
  {
    id: '6',
    label: 'Chat Message',
    icon: icons.chat,
    keyName: 'chatMessage',
  },
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <NotificationItem
      icon={item.icon}
      label={item.label}
      value={true}
      onValueChange={() => {}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          {/* You can use your icon library here, e.g. Ionicons */}
          {/* <Ionicons name="arrow-back" size={wp('6%')} color="#333" /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: wp('6%') }} />
      </View>
      {/* List */}
      <View style={styles.listContainer}>
        <FlatList
          data={notificationsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: hp('2%'),
    paddingHorizontal: wp('6%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1.5%'),
  },
  backButton: {
    width: wp('6%'),
    height: wp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: wp('5.5%'),
    fontWeight: 'bold',
    color: '#1E293B',
    marginLeft: wp('4%'),
    flex: 1,
  },
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    // Optionally add shadow for iOS and elevation for Android
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,
  },
  listContent: {
    paddingBottom: hp('2%'),
  },
});

export default NotificationScreen;

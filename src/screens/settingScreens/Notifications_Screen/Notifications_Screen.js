import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NotificationToggle from '../../../components/Notification_Items/Notification_item';
import AppSafeAreaView from '../../../components/General/SafeAreaView/SafeAreaView';
import Header from '../../../components/General/Headers/GeneralHeader';

const NotificationSettingsScreen = () => {
  const [toggles, setToggles] = useState({
    postLikes: true,
    comments: true,
    follow: true,
    mentions: true,
    gifts: true,
    chat: true,
  });

  const handleToggle = key => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AppSafeAreaView>
      <Header showBack={true} title="Notifications" />
      <ScrollView contentContainerStyle={styles.container}>
        <NotificationToggle
          icon={<Icon name="heart" size={wp('5.5%')} color="#C084FC" />}
          label="Post Likes"
          value={toggles.postLikes}
          onToggle={() => handleToggle('postLikes')}
        />
        <NotificationToggle
          icon={<Icon name="comment" size={wp('5.5%')} color="#C084FC" />}
          label="Comments On Post"
          value={toggles.comments}
          onToggle={() => handleToggle('comments')}
        />
        <NotificationToggle
          icon={<Icon name="account-plus" size={wp('5.5%')} color="#C084FC" />}
          label="Follow"
          value={toggles.follow}
          onToggle={() => handleToggle('follow')}
        />
        <NotificationToggle
          icon={<Icon name="at" size={wp('5.5%')} color="#C084FC" />}
          label="Mentions"
          value={toggles.mentions}
          onToggle={() => handleToggle('mentions')}
        />
        <NotificationToggle
          icon={<Icon name="gift" size={wp('5.5%')} color="#C084FC" />}
          label="Gifts Received"
          value={toggles.gifts}
          onToggle={() => handleToggle('gifts')}
        />
        <NotificationToggle
          icon={<Icon name="chat" size={wp('5.5%')} color="#C084FC" />}
          label="Chat Message"
          value={toggles.chat}
          onToggle={() => handleToggle('chat')}
        />
      </ScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp('2%'),
    paddingBottom: hp('5%'),
    backgroundColor: '#fff',
  },
});

export default NotificationSettingsScreen;

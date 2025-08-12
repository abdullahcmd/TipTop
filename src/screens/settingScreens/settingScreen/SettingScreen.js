import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SettingsSection, SettingsItem } from '../../../components';
import SaveIcon from '../../../assets/svgs/save.svg';
import LanguageIcon from '../../../assets/svgs/language.svg';
import SettingIcon from '../../../assets/svgs/settings.svg';
import BlockUserIcon from '../../../assets/svgs/block-user.svg';
import QRCodeIcon from '../../../assets/svgs/qr-code.svg';
import CoinWalletIcon from '../../../assets/svgs/coin-wallet.svg';
import EyeIcon from '../../../assets/svgs/eye.svg';
import PeopleIcon from '../../../assets/svgs/users.svg';
import MessageIcon from '../../../assets/svgs/message.svg';
import BellIcon from '../../../assets/svgs/bell.svg';
import PrimaryColors from '../../../constants/colors';

const svgColor = '#374151';

const SettingScreen = ({ navigation }) => {
  const [showFollowings, setShowFollowings] = useState(true);
  const [showChatButton, setShowChatButton] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSavedPosts = () => {
    navigation.navigate('SavedPosts');
  };

  const handleLanguages = () => {
    navigation.navigate('SubscriptionScreen');
  };

  const handleBlockedUsers = () => {
    navigation.navigate('BlockedUsers');
  };

  const handleQRCode = () => {
    navigation.navigate('MyQRCode');
  };

  const handleCoinWallet = () => {
    // Navigate to coin wallet screen
  };

  const handleWhoCanSeePosts = () => {
    // Show dropdown for post visibility
  };

  const handleNotifications = () => {
    navigation.navigate('NotificationScreen');
  };
  const handleSubscription = () => {
    navigation.navigate('SubscriptionScreen');
  };

  // Array for account settings items
  const accountSettingsItems = [
    {
      icon: <SettingIcon width={24} height={24} color={svgColor} />,
      title: 'Account Settings',
      onPress: () => navigation.navigate('AccountSettingScreen'),
      showArrow: true,
    },
    {
      icon: <SaveIcon width={24} height={24} color={svgColor} />,
      title: 'Saved Posts',
      onPress: handleSavedPosts,
      showArrow: true,
    },
    {
      icon: <LanguageIcon width={24} height={24} color={svgColor} />,
      title: 'Languages',
      onPress: handleLanguages,
      showArrow: true,
    },
    {
      icon: <BlockUserIcon width={24} height={24} color={svgColor} />,
      title: 'Blocked Users',
      onPress: handleBlockedUsers,
      showArrow: true,
    },
    {
      icon: <QRCodeIcon width={24} height={24} color={svgColor} />,
      title: 'My QR Code',
      onPress: handleQRCode,
      showArrow: true,
    },
    {
      icon: <CoinWalletIcon width={24} height={24} color={svgColor} />,
      title: 'Coin Wallet',
      onPress: handleCoinWallet,
      showArrow: true,
    },
    {
      icon: <BlockUserIcon width={24} height={24} color={svgColor} />,
      title: 'Subscription',
      onPress: handleSubscription,
      showArrow: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={wp('6%')} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          {/* Account Section */}
          <SettingsSection title="Account">
            {accountSettingsItems.map((item, idx) => (
              <SettingsItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                onPress={item.onPress}
                showArrow={item.showArrow}
              />
            ))}
          </SettingsSection>

          {/* Privacy Section */}
          <SettingsSection title="Privacy">
            <SettingsItem
              icon={<EyeIcon width={24} height={24} color={svgColor} />}
              title="Who Can See Posts"
              onPress={handleWhoCanSeePosts}
              showDropdown={true}
              dropdownValue="Followers Only"
              showArrow={true}
            />
            <SettingsItem
              icon={<PeopleIcon width={24} height={24} color={svgColor} />}
              title="Show My Followings"
              showToggle={true}
              toggleValue={showFollowings}
              onToggleChange={setShowFollowings}
              switchActiveColor={'#C084FC'}
              switchInactiveColor="#E5E7EB"
            />
            <SettingsItem
              icon={<MessageIcon width={24} height={24} color={svgColor} />}
              title="Show Chat Button"
              showToggle={true}
              toggleValue={showChatButton}
              onToggleChange={setShowChatButton}
              switchActiveColor={'#C084FC'}
              switchInactiveColor="#E5E7EB"
            />
            <SettingsItem
              icon={<BellIcon width={24} height={24} color={svgColor} />}
              title="Notifications"
              onPress={handleNotifications}
              showArrow={true}
            />
          </SettingsSection>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  backButton: {
    padding: wp('1%'),
  },
  headerTitle: {
    fontSize: wp('5.5%'),
    color: '#333',
    marginLeft: wp('5%'),
    fontWeight: '800',
  },
  headerSpacer: {
    width: wp('8%'),
  },
  content: {
    flex: 1,
    paddingTop: hp('2.5%'),
    paddingHorizontal: wp('5%'),
  },
});

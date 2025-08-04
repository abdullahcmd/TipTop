import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsItem from '../../../components/SettingsItem/SettingsItem';
import AccountSettingsItem from '../../../components/AccountSettingsItem/AccountSettingsItem';
import SettingsSection from '../../../components/SettingsSection/SettingsSection';
import ProfilePhotoSelector from '../../../components/ProfilePhotoSelector/ProfilePhotoSelector';
import DisplayName from '../../../components/DisplayName/DisplayName';
import MoreOptionsItem from '../../../components/MoreOptionsItem/MoreOptionsItem';
import CoinWalletIcon from '../../../assets/svgs/coin-wallet.svg';
import LeftArrowIcon from '../../../assets/svgs/left-chevron.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../../../constants/icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AccountSettingScreen = ({ navigation }) => {
    const [selectedPhoto, setSelectedPhoto] = useState(1);
    const [newsletterEnabled, setNewsletterEnabled] = useState(true);
    const [textMessagesEnabled, setTextMessagesEnabled] = useState(false);
    const [phoneCallsEnabled, setPhoneCallsEnabled] = useState(false);

    const handlePhotoSelect = (photoId) => {
        setSelectedPhoto(photoId);
    };

    const handleEditName = () => {
        // Handle name editing
        console.log('Edit name pressed');
    };

    const handleAccountItemPress = (item) => {
        console.log(`${item} pressed`);
        // Navigate to respective screens
    };

    const handleMoreOptionsPress = (item) => {
        console.log(`${item} pressed`);
        // Navigate to respective screens
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <LeftArrowIcon width={wp('5%')} height={wp('5%')} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <TouchableOpacity style={styles.moreButton}>
                    <Icon name="ellipsis-horizontal" size={24} color="#333" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Change Photo Section */}
                <ProfilePhotoSelector
                    selectedPhoto={selectedPhoto}
                    onPhotoSelect={handlePhotoSelect}
                />

                {/* Displaying Name Section */}
                <DisplayName
                    name="Camilla Scianna"
                    onEditPress={handleEditName}
                />

                {/* Account Section */}
                <SettingsSection title="Account">
                    <AccountSettingsItem
                        iconImage={icons.lock}
                        title="Change Password"
                        onPress={() => handleAccountItemPress('Change Password')}
                        showArrow={true}
                    />
                    <AccountSettingsItem
                        iconImage={icons.notification}
                        title="Notifications"
                        onPress={() => handleAccountItemPress('Notifications')}
                        showArrow={true}
                    />
                    <AccountSettingsItem
                        iconImage={icons.hand}
                        title="Privacy Settings"
                        onPress={() => handleAccountItemPress('Privacy Settings')}
                        showArrow={true}
                    />
                    <AccountSettingsItem
                        iconImage={icons.signOut}
                        title="Sign Out"
                        onPress={() => handleAccountItemPress('Sign Out')}
                        showArrow={true}
                    />
                </SettingsSection>

                {/* More Options Section */}
                <SettingsSection title="More Options">
                    <SettingsItem
                        title="Newsletter"
                        showToggle={true}
                        toggleValue={newsletterEnabled}
                        onToggleChange={setNewsletterEnabled}
                        switchActiveColor={'#4BD964'}
                        switchInactiveColor="#E5E7EB"
                    />
                    <SettingsItem
                        title="Text Messages"
                        showToggle={true}
                        toggleValue={textMessagesEnabled}
                        onToggleChange={setTextMessagesEnabled}
                        switchActiveColor={'#4BD964'}
                        switchInactiveColor="#E5E7EB"
                    />
                    <SettingsItem
                        title="Phone Calls"
                        showToggle={true}
                        toggleValue={phoneCallsEnabled}
                        onToggleChange={setPhoneCallsEnabled}
                        switchActiveColor={'#4BD964'}
                        switchInactiveColor="#E5E7EB"
                    />
                    <MoreOptionsItem
                        title="Currency"
                        subtitle="$ - USD"
                        onPress={() => handleMoreOptionsPress('Currency')}
                    />
                    <MoreOptionsItem
                        title="Languages"
                        subtitle="English"
                        onPress={() => handleMoreOptionsPress('Languages')}
                    />
                    <MoreOptionsItem
                        title="Linked Accounts"
                        subtitle="Facebook, Google"
                        onPress={() => handleMoreOptionsPress('Linked Accounts')}
                    />
                </SettingsSection>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AccountSettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    backButton: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
    },
    moreButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
    },
});
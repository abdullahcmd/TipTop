import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { icons } from '../../constants/icons';

const BlockedUserItem = ({ profileImage, username, fullName, onUnblock }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Image source={{ uri: profileImage }} style={styles.profileImage} />
                <View style={styles.userInfo}>
                    <View style={styles.usernameRow}>
                        <Text style={styles.username}>{username}</Text>
                        <Image
                            source={icons.checkmark}
                            style={styles.checkmarkIcon}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.fullName}>{fullName}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.unblockButton} onPress={onUnblock}>
                <Text style={styles.unblockText}>Unblock</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp('.5%'),
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: wp('6%'),
    },
    userInfo: {
        marginLeft: wp('3%'),
    },
    usernameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        fontSize: wp('4%'),
        fontWeight: '600',
        color: '#000',
    },
    checkmarkIcon: {
        width: wp('3.5%'),
        height: wp('3.5%'),
        marginLeft: wp('1%'),
    },
    fullName: {
        fontSize: wp('3.5%'),
        color: '#7c7c7c',
    },
    unblockButton: {
        backgroundColor: '#E5E7EB',
        borderRadius: wp('2%'),
        paddingVertical: hp('0.8%'),
        paddingHorizontal: wp('4%'),
    },
    unblockText: {
        fontSize: wp('3.8%'),
        fontWeight: '600',
        color: '#000',
    },
});

export default BlockedUserItem;

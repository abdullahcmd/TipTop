import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MoreOptionsItem = ({
    title,
    subtitle,
    onPress,
    showArrow = true
}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            disabled={!onPress}
        >
            <View style={styles.leftSection}>
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.rightSection}>
                {subtitle && (
                    <Text style={styles.subtitle}>{subtitle}</Text>
                )}
                {showArrow && (
                    <Icon name="chevron-forward" size={wp('5%')} color="#9CA3AF" style={styles.arrowIcon} />
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('5%'),
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: wp('4%'),
        color: '#333',
        fontWeight: '500',
    },
    subtitle: {
        fontSize: wp('3.5%'),
        color: '#8A8A8E',
        marginRight: wp('2%'),
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowIcon: {
        // Optional: add marginLeft if you want space between subtitle and arrow
    },
});

export default MoreOptionsItem; 
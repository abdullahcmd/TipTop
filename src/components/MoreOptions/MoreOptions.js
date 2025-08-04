import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MoreOptions = ({
    title,
    subtitle,
    onPress,
    iconColor = "#9CA3AF",
    iconSize = wp('5%'),
    disabled = false
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <View style={styles.leftSection}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
            </View>

            <View style={styles.rightSection}>
                <Icon name="chevron-forward" size={iconSize} color={iconColor} />
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
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: wp('4%'),
        color: '#333',
        fontWeight: '500',
    },
    subtitle: {
        fontSize: wp('3.5%'),
        color: '#666',
        marginTop: hp('0.2%'),
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    disabled: {
        opacity: 0.5,
    },
});

export default MoreOptions; 
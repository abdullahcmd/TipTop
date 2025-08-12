import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Switch from "../Switch/Switch";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NotificationItem = ({ icon, label, value, onValueChange }) => {
    const [switchValue, setSwitchValue] = useState(value);

    const handleSwitchChange = (newValue) => {
        setSwitchValue(newValue);
        if (onValueChange) {
            onValueChange(newValue);
        }
    };

    return (
        <View style={styles.itemContainer}>
            <View style={styles.iconLabel}>
                <Image source={icon} style={{ width: wp('6%'), height: wp('6%') }} resizeMode='contain' />
                <Text style={styles.label}>{label}</Text>
            </View>
            <Switch
                value={switchValue}
                onValueChange={handleSwitchChange}
                activeColor="#C084FC"
                inactiveColor="#ccc"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "#f0f0f0",
    },
    iconLabel: {
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        fontSize: 16,
        marginLeft: 10,
        color: "#000",
    },
});

export default NotificationItem;

import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import PrimaryColors from '../../constants/colors';

const Switch = ({
    value,
    onValueChange,
    disabled = false,
    activeColor = PrimaryColors.PurpleText,
    inactiveColor = '#E5E7EB'
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                value ? [styles.activeContainer, { backgroundColor: activeColor }] : [styles.inactiveContainer, { backgroundColor: inactiveColor }],
                disabled && styles.disabled
            ]}
            onPress={() => !disabled && onValueChange(!value)}
            activeOpacity={0.8}
        >
            <View
                style={[
                    styles.thumb,
                    value ? styles.activeThumb : styles.inactiveThumb,
                ]}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 51,
        height: 31,
        borderRadius: 15.5,
        justifyContent: 'center',
        paddingHorizontal: 2,
    },
    activeContainer: {
        // backgroundColor will be set dynamically
    },
    inactiveContainer: {
        // backgroundColor will be set dynamically
    },
    disabled: {
        opacity: 0.5,
    },
    thumb: {
        width: 27,
        height: 27,
        borderRadius: 13.5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        transform: [{ translateX: 0 }],
    },
    activeThumb: {
        transform: [{ translateX: 20 }],
    },
    inactiveThumb: {
        transform: [{ translateX: 0 }],
    },
});

export default Switch; 
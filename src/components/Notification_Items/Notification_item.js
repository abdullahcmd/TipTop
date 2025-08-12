import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Switch from '../Switch/Switch';

const NotificationToggle = ({ icon, label, value, onToggle, disabled }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        disabled={disabled}
        activeColor="#C084FC"
        inactiveColor="#ccc"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: wp('3%'),
  },
  label: {
    fontSize: wp('4.2%'),
    color: '#2d2d2d',
    fontWeight: '500',
  },
});

export default NotificationToggle;

// components/GoogleButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Google_Button from '../../../assets/svgs/Google_Button.svg';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const GoogleButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.circle} onPress={onPress}>
      <Google_Button />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#fff',
    borderRadius: 50, // Do not change as per instruction
    padding: wp('4.2%'), // approx 16
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: wp('5%'), // approx 20
  },
});

export default GoogleButton;

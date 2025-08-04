// components/ContinueButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ContinueButton = ({
  onPress,
  title = 'Continue',
  secondStyle,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={[styles.text, secondStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    paddingVertical: wp('5.5%'), // approx 22 on standard 400px height
    borderRadius: 12,
    marginTop: wp('5%'), // approx 20
    marginBottom: wp('10%'), // approx 40
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: wp('4.2%'), // approx 16
    color: '#333',
  },
});

export default ContinueButton;

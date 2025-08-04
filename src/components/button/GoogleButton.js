// components/GoogleButton.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import Google_Button from '../../assets/svgs/Google_Button.svg';
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
    borderRadius: 50,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default GoogleButton;

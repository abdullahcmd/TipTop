// components/ContinueButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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
    //marginHorizontal: 13,
    paddingVertical: 22,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 40,
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    color: '#333',
  },
});

export default ContinueButton;

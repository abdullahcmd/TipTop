import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { hp, wp } from '../../utils/helpers/responsive';

const GradientButton = ({
  text = 'Send',
  colors = ['#ff2a68', '#6c63ff'],
  width = '80%',
  height = hp(6),
  fontSize = wp(5),
  onPress, // Action to perform on button press
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: width,
          height: height,
          marginTop: hp(2),
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: fontSize, fontWeight: '500' }}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

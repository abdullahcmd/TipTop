import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LabeledPasswordInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = true,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#A6A6A6"
          style={styles.input}
          secureTextEntry={secureTextEntry && !visible}
          value={value}
          onChangeText={onChangeText}
        />
        {secureTextEntry && (
          <Ionicons
            name={visible ? 'eye-off-outline' : 'eye-outline'}
            size={wp('5%')} // Use width percentage for responsiveness
            color="#9F9F9F"
            onPress={() => setVisible(prev => !prev)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: hp('2%'),
  },
  label: {
    fontSize: wp('4%'), // Responsive font size
    fontWeight: '600',
    color: '#111111',
    paddingHorizontal: wp('6%'),
    marginBottom: hp('1%'), // Responsive margin for spacing
  },
  inputRow: {
    height: hp('7%'), // Responsive height based on screen height
    backgroundColor: '#F3F3F3',
    paddingHorizontal: wp('4%'), // Responsive horizontal padding
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: wp('4%'), // Responsive font size
    color: '#111111',
  },
});

export default LabeledPasswordInput;

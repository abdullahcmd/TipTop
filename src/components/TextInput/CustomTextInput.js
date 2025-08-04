import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import PrimaryColors from '../../constants/colors';
const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  password = false,
}) => {
  const [secure, setSecure] = useState(password);

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#FFFFFFCC"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secure}
      />
      {password && (
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Feather
            name={secure ? 'eye' : 'eye-off'}
            size={20}
            color="#FFFFFFCC"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: PrimaryColors.White10percent_Opacity,
    borderColor: PrimaryColors.White30percent_Opacity,
    paddingHorizontal: 19,
    paddingVertical: 18,
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
});

export default CustomTextInput;

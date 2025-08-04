import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import PrimaryColors from '../../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
            size={wp('5%')}
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
    paddingHorizontal: wp('5%'),
    paddingVertical: Platform.OS === 'android' ? hp('1.0%') : hp('2.2%'),
    borderRadius: 10,
    marginVertical: hp('1.2%'),
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: wp('4%'),
  },
});

export default CustomTextInput;

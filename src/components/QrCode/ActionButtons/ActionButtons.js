import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { icons } from '../../../constants/icons';

const ActionButtons = ({ onSave, onShare }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onSave}>
        <Image source={icons.download} style={styles.downloadIcon} />
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: wp('1%'),
    marginTop: hp('3%'),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: wp('2%'),
    paddingVertical: hp('1.5%'),
    // paddingHorizontal: wp('15%'),
    width: '44%',
  },
  downloadIcon: {
    width: wp('6%'),
    height: wp('6%'),
    resizeMode: 'contain',
    // tintColor: '#374151',
    // marginBottom: hp('0.5%'),
  },
  buttonText: {
    fontSize: wp('3.5%'),
    color: '#374151',
    fontWeight: '600',
    marginTop: hp('.5%'),
  },
});

export default ActionButtons;

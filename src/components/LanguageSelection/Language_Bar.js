import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LanguageOption = ({ selected, onPress, nativeText, englishText }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.wrapper}
    >
      <View style={[styles.container, selected && styles.selectedContainer]}>
        <View style={styles.radioWrapper}>
          <View style={styles.radioOuter}>
            {selected && <View style={styles.radioInner} />}
          </View>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.nativeText}>{nativeText}</Text>
          <Text style={styles.englishText}>{englishText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: hp('0.8%'),
    marginHorizontal: wp('4%'),
  },
  container: {
    borderRadius: 12,
    flexDirection: 'row',
    paddingVertical: hp('1.6%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  selectedContainer: {
    borderWidth: 1.5,
    borderColor: '#fff',
    backgroundColor: '#FFFFFF80',
  },
  radioWrapper: {
    marginRight: wp('4%'),
  },
  radioOuter: {
    width: wp('5.5%'),
    height: wp('5.5%'),
    borderRadius: wp('2.75%'),
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: wp('2.5%'),
    height: wp('2.5%'),
    borderRadius: wp('1.25%'),
    backgroundColor: '#fff',
  },
  textWrapper: {
    flexDirection: 'column',
  },
  nativeText: {
    color: '#fff',
    fontSize: wp('4.2%'),
    fontWeight: '400',
  },
  englishText: {
    color: '#fff',
    fontSize: wp('4.2%'),
    fontWeight: '600',
  },
});

export default LanguageOption;

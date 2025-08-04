// components/LanguageOption.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // You can use react-native-vector-icons directly too

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
    marginVertical: 6,
    marginHorizontal: 16,
  },
  container: {
    borderRadius: 12,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  selectedContainer: {
    borderWidth: 1.5,
    borderColor: '#fff',
    backgroundColor: '#FFFFFF80',
  },
  radioWrapper: {
    marginRight: 16,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  textWrapper: {
    flexDirection: 'column',
  },
  nativeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  englishText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LanguageOption;

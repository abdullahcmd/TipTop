// components/Search/SearchPageHeader.js
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SearchPageHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.inputContainer}>
        <Icon
          name="search"
          size={wp('4.5%')}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <Icon name="close" size={wp('4.5%')} color="#bbb" />
      </View>
      <Text style={styles.cancel}>Cancel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#EFEFF4',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('0.9%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('2.5%'),
  },
  searchIcon: {
    marginRight: wp('2%'),
  },
  input: {
    flex: 1,
    fontSize: wp('4.5%'),
    color: '#000',
    paddingVertical: wp('0.9%'),
  },
  cancel: {
    fontSize: wp('4.5%'),
    color: '#000',
  },
});

export default SearchPageHeader;

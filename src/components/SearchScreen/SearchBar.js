// components/Search/SearchPageHeader.js
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchPageHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={18} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <Icon name="close" size={18} color="#bbb" />
      </View>
      <Text style={styles.cancel}>Cancel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  searchIcon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  cancel: {
    fontSize: 16,
    color: '#000',
  },
});

export default SearchPageHeader;

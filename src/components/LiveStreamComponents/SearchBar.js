import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput placeholder="Search here.." style={styles.input} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    backgroundColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  input: {
    height: 48,
    fontSize: 16,
  },
});

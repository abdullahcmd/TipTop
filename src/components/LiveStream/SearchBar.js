import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const handleTextChange = text => {
    onSearch(text); // Call the passed function with the updated text
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Search here.."
        placeholderTextColor={'#D1D5DB'}
        style={styles.input}
        onChangeText={handleTextChange} // Trigger the search handler
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  input: {
    height: 48,
    fontSize: 16,
    color: 'white',
  },
});

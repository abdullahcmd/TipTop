// screens/SearchScreen.js
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SearchPageHeader from '../../components/Search/SearchBar';
import RecentSearches from '../../components/Search/RecentSearches';
import TrendingList from '../../components/Search/TrendingList';
import AppSafeAreaView from '../../components/General/SafeAreaView/SafeAreaView';

const SearchScreen = () => {
  return (
    <AppSafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <SearchPageHeader />
      <RecentSearches />
      <TrendingList />
    </AppSafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// screens/SearchScreen.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SearchPageHeader from '../../components/SearchScreen/SearchBar';
import RecentSearches from '../../components/SearchScreen/RecentSearches';
import TrendingList from '../../components/SearchScreen/TrendingList';
import AppSafeAreaView from '../../components/General/SafeAreaView/SafeAreaView';

const SearchScreen = () => {
  return (
    <AppSafeAreaView>
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

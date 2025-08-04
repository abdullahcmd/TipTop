// components/Search/RecentSearches.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const recentUsers = [
  {
    id: '1',
    name: 'Gerard\nFabiano',
    image: require('../../assets/images/u1.jpg'),
  },
  {
    id: '2',
    name: 'Amber\nJulia',
    image: require('../../assets/images/u2.jpg'),
  },
  {
    id: '3',
    name: 'Fernando\nAgaro',
    image: require('../../assets/images/u3.jpg'),
  },
  {
    id: '4',
    name: 'Jane\nSunny',
    image: require('../../assets/images/u4.jpg'),
  },
  {
    id: '5',
    name: 'Richard\nMoore',
    image: require('../../assets/images/u5.jpg'),
  },
];

const RecentSearches = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Searches</Text>
      <FlatList
        horizontal
        data={recentUsers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.user}>
            <Image source={item.image} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginTop: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  user: {
    alignItems: 'center',
    marginRight: 14,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  name: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 12,
  },
});

export default RecentSearches;

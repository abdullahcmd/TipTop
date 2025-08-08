// components/Search/RecentSearches.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const recentUsers = [
  {
    id: '1',
    name: 'Gerard\nFabiano',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Amber\nJulia',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Fernando\nAgaro',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    name: 'Jane\nSunny',
    image: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: '5',
    name: 'Richard\nMoore',
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '6',
    name: 'Richard\nMoore',
    image: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: '7',
    name: 'Richard\nMoore',
    image: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: '8',
    name: 'Richard\nMoore',
    image: 'https://i.pravatar.cc/150?img=8',
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
            <Image source={{ uri: item.image }} style={styles.avatar} />
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
    paddingHorizontal: wp('4%'),
    marginTop: hp('1.2%'),
    marginBottom: hp(2),
  },
  title: {
    fontWeight: 'bold',
    fontSize: wp('4.5%'),
    marginBottom: hp('2%'),
    color: '#000',
  },
  user: {
    alignItems: 'center',
    marginRight: wp('5%'),
  },
  avatar: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: 60,
  },
  name: {
    textAlign: 'center',
    marginTop: hp('0.8%'),
    fontSize: wp('3%'),
    color: '#333',
    lineHeight: hp('2%'),
  },
});

export default RecentSearches;

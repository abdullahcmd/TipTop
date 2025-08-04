// components/Search/TrendingList.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const trendingData = [
  {
    id: '1',
    name: 'Nikita Malion',
    mutuals: 7,
    image: require('../../assets/images/u1.jpg'),
    followed: false,
  },
  {
    id: '2',
    name: 'Charming Charlotte',
    mutuals: 48,
    image: require('../../assets/images/u2.jpg'),
    followed: true,
  },
  {
    id: '3',
    name: 'Naive Queen',
    mutuals: 74,
    image: require('../../assets/images/u3.jpg'),
    followed: false,
  },
  {
    id: '4',
    name: 'Oscar Scotty',
    mutuals: 3,
    image: require('../../assets/images/u4.jpg'),
    followed: false,
  },
  {
    id: '5',
    name: 'Little Lady',
    mutuals: 7,
    image: require('../../assets/images/u5.jpg'),
    followed: true,
  },
];

const TrendingList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <FlatList
        data={trendingData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={item.image} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.mutuals}>{item.mutuals} mutual friends</Text>
            </View>
            <TouchableOpacity
              style={item.followed ? styles.followingBtn : styles.followBtn}
            >
              <Text
                style={item.followed ? styles.followingText : styles.followText}
              >
                {item.followed ? 'Following' : 'Follow'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginTop: 8,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },
  name: {
    fontWeight: '600',
    fontSize: 15,
  },
  mutuals: {
    color: '#777',
    fontSize: 13,
  },
  followBtn: {
    backgroundColor: '#9333ea',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },
  followText: {
    color: '#fff',
    fontWeight: '600',
  },
  followingBtn: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },
  followingText: {
    color: '#000',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
  },
});

export default TrendingList;

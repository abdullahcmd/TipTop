import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const initialData = [
  {
    id: '1',
    name: 'Nikita Malion',
    mutuals: 7,
    image: 'https://i.pravatar.cc/150?img=9',
    followed: false,
  },
  {
    id: '2',
    name: 'Charming Charlotte',
    mutuals: 48,
    image: 'https://i.pravatar.cc/150?img=10',
    followed: true,
  },
  {
    id: '3',
    name: 'Naive Queen',
    mutuals: 74,
    image: 'https://i.pravatar.cc/150?img=11',
    followed: false,
  },
  {
    id: '4',
    name: 'Oscar Scotty',
    mutuals: 3,
    image: 'https://i.pravatar.cc/150?img=12',
    followed: false,
  },
  {
    id: '5',
    name: 'Little Lady',
    mutuals: 7,
    image: 'https://i.pravatar.cc/150?img=13',
    followed: true,
  },
];

const TrendingList = () => {
  const [users, setUsers] = useState(initialData);

  const toggleFollow = id => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, followed: !user.followed } : user,
      ),
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.mutuals}>{item.mutuals} mutual friends</Text>
      </View>

      {item.followed ? (
        <TouchableOpacity
          style={styles.followingBtn}
          onPress={() => toggleFollow(item.id)}
        >
          <Text style={styles.followingText}>Following</Text>
        </TouchableOpacity>
      ) : (
        <LinearGradient
          colors={['#fc466b', '#a96ff1', '#3f5efb']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.followBtn}
        >
          <TouchableOpacity
            onPress={() => toggleFollow(item.id)}
            style={styles.followTouchable}
            activeOpacity={0.8}
          >
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('4%'),
    marginTop: hp('1.5%'),
  },
  title: {
    fontWeight: 'bold',
    fontSize: wp('4.5%'),
    marginBottom: hp('3%'),
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    marginRight: wp('3%'),
  },
  name: {
    fontWeight: '600',
    fontSize: wp('4%'),
    color: '#111',
  },
  mutuals: {
    color: '#777',
    fontSize: wp('3.2%'),
    marginTop: hp('0.3%'),
  },
  followBtn: {
    borderRadius: wp('2%'),
    overflow: 'hidden',
    minWidth: wp('24%'),
    height: hp('3.75%'),
    justifyContent: 'center',
  },
  followTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: wp('3.5%'),
    textAlign: 'center',
  },
  followingBtn: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('0.9%'),
    borderRadius: wp('2%'),
  },
  followingText: {
    color: '#000',
    fontWeight: '500',
    fontSize: wp('3.5%'),
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: hp('1.8%'),
  },
});

export default TrendingList;

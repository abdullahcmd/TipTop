import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const StoryItem = ({ uri, isOnline, isUser, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.imageWrapper, isUser && styles.userBorder]}>
        <Image source={{ uri }} style={styles.image} />
        {isUser && (
          <View style={styles.plusIcon}>
            <Icon name="add" size={hp('1.6%')} color="#fff" />
          </View>
        )}
        {isOnline && <View style={styles.onlineDot} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginHorizontal: wp('2%') },
  imageWrapper: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  userBorder: { borderColor: '#6F37EE' },
  image: { width: '100%', height: '100%', borderRadius: wp('7.5%') },
  onlineDot: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    width: wp('3.5%'),
    height: wp('3.5%'),
    backgroundColor: '#2ECC71',
    borderRadius: wp('1.75%'),
    borderWidth: 2,
    borderColor: '#fff',
  },
  plusIcon: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#6F37EE',
    borderRadius: wp('2.5%'),
    padding: 2,
  },
});

export default StoryItem;

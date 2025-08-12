import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const UserInfoCard = ({ avatar, username, fullname }) => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.nameContainer}>
        <View style={styles.row}>
          <Text style={styles.username}>{username}</Text>
          {/* <Image
            source={require('../../assets/verified.png')}
            style={styles.verified}
          /> */}
        </View>
        <Text style={styles.fullname}>{fullname}</Text>
        <Text style={styles.heading}>Stream Ended!</Text>
        <Text style={styles.subText}>Below is the summary of your stream!</Text>
      </View>
    </View>
  );
};

export default UserInfoCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: hp('1.5%'),
  },
  avatar: {
    width: wp('32%'),
    height: wp('32%'),
    borderRadius: wp('16%'),
    borderWidth: 4,
    borderColor: '#B86DF4',
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#fff',
    marginRight: wp('2%'),
  },
  verified: {
    width: wp('5%'),
    height: wp('5%'),
  },
  fullname: {
    color: '#C4C4C4',
    fontSize: wp('4%'),
    marginTop: hp('0.5%'),
  },
  heading: {
    fontSize: wp('7.5%'),
    color: '#fff',
    fontWeight: 'bold',
    marginTop: hp('3.5%'),
  },
  subText: {
    fontSize: wp('4%'),
    color: '#BEBEBE',
    marginTop: Platform.OS === 'ios' ? hp('2%') : hp('1%'),
  },
});

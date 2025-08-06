import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

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
    marginTop: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#B86DF4',
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 6,
  },
  verified: {
    width: 20,
    height: 20,
  },
  fullname: {
    color: '#C4C4C4',
    fontSize: 16,
    marginTop: 4,
  },
  heading: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 30,
  },
  subText: {
    fontSize: 16,
    color: '#BEBEBE',
    marginTop: Platform.OS === 'ios' ? 17 : 8,
  },
});

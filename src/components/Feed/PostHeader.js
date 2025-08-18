import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';
import Verified from '../../assets/svgs/Id_Verified.svg';
const PostHeader = ({ avatar, username, isVerified, time }) => (
  <View style={styles.row}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <View style={{ flex: 1 }}>
      <Text style={styles.username}>
        {username} {isVerified && <Verified />}
      </Text>
      <Text style={styles.time}>{time}</Text>
    </View>
    <TouchableOpacity>
      <Icon name="dots-three-horizontal" size={hp('2.2%')} color="#555" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: hp('1%') },
  avatar: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    marginRight: wp('3%'),
  },
  username: { fontSize: hp('1.9%'), fontWeight: '600', color: '#000' },
  time: { fontSize: hp('1.6%'), color: '#777' },
});

export default PostHeader;

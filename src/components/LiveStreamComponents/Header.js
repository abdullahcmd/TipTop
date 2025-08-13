import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LiveStream from '../../assets/svgs/LiveStreamButton.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HeaderButtons = ({ onGoLivePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goLiveBtn} onPress={onGoLivePress}>
        <LiveStream width={wp('5%')} height={hp('3%')} />
        <Text style={styles.goText}>Go Live</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    gap: wp('4%'), // Responsive gap
  },
  liveBtn: {
    backgroundColor: '#FF4D4D',
    paddingHorizontal: wp('4%'), // Responsive horizontal padding
    paddingVertical: hp('1%'), // Responsive vertical padding
    borderRadius: wp('10%'), // Responsive border radius
    gap: wp('1%'), // Responsive gap between icon and text
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveIcon: {
    color: '#fff',
    fontSize: wp('4%'), // Responsive font size
    marginRight: wp('2%'),
  },
  liveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('3.8%'), // Responsive font size
  },
  goLiveBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.5%'),
    borderRadius: wp('10%'),
    gap: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  goText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: wp('3.8%'),
  },
});

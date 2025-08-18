import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ActionRow = ({ onReplyPress, time }) => (
  <View style={styles.actionRow}>
    <TouchableOpacity onPress={onReplyPress} activeOpacity={0.6}>
      <Text style={styles.replyText}>Reply</Text>
    </TouchableOpacity>
    {!!time && <Text style={styles.timeText}>{time}</Text>}
  </View>
);

const styles = StyleSheet.create({
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2.5%'),
    marginTop: hp('1%'),
  },
  replyText: {
    fontSize: hp('1.8%'),
    color: '#0B57D0',
    fontWeight: '600',
  },
  timeText: {
    fontSize: hp('1.7%'),
    color: '#7A7F85',
  },
});

export default ActionRow;

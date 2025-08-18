import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Avatar from './Avatar';
import ActionRow from './ActionRow';

const ReplyItem = ({ reply, onReplyPress }) => {
  return (
    <View style={styles.replyContainer}>
      <Avatar uri={reply.avatar} size={hp('4.6%')} />
      <View style={styles.replyBody}>
        <Text style={styles.author}>{reply.author}</Text>
        <Text style={styles.commentText}>{reply.text}</Text>
        <ActionRow
          onReplyPress={() => onReplyPress(reply.author)}
          time={reply.time}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: wp('2.5%'),
    marginTop: hp('1.6%'),
    paddingLeft: wp('1%'),
  },
  replyBody: { flex: 1 },
  author: {
    fontSize: hp('2.0%'),
    fontWeight: '700',
    color: '#1F2328',
    marginBottom: hp('0.4%'),
  },
  commentText: {
    fontSize: hp('1.85%'),
    color: '#1F2328',
    lineHeight: hp('2.5%'),
  },
});

export default ReplyItem;

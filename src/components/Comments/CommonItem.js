import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Avatar from './Avatar';
import AttachmentCard from './AttachmentCard';
import ActionRow from './ActionRow';
import ReplyItem from './ReplyItem';

const CommentItem = ({ item, onReplyToAuthor }) => {
  return (
    <View style={styles.commentContainer}>
      <Avatar uri={item.avatar} />
      <View style={styles.commentBody}>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.commentText}>{item.text}</Text>

        {!!item.attachment && (
          <AttachmentCard
            thumb={item.attachment.thumb}
            title={item.attachment.title}
            subtitle={item.attachment.subtitle}
          />
        )}

        <ActionRow
          onReplyPress={() => onReplyToAuthor(item.id, item.author)}
          time={item.time}
        />

        {item.replies?.map(r => (
          <ReplyItem
            key={r.id}
            reply={r}
            onReplyPress={name => onReplyToAuthor(item.id, name)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: wp('3%'),
  },
  commentBody: { flex: 1 },
  author: {
    fontSize: hp('2.05%'),
    fontWeight: '700',
    color: '#1F2328',
    marginBottom: hp('0.6%'),
  },
  commentText: {
    fontSize: hp('1.95%'),
    color: '#1F2328',
    lineHeight: hp('2.6%'),
  },
});

export default CommentItem;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PostFooter = ({ likes, comments, shares, bookmarks, onCommentPress }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => (liked ? prev - 1 : prev + 1));
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.iconRow} onPress={toggleLike}>
        <Icon
          name={liked ? 'heart' : 'heart-outline'}
          size={hp('2.5%')}
          color={liked ? '#e74c3c' : '#333'}
        />
        <Text style={styles.count}>{likeCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconRow} onPress={onCommentPress}>
        <Icon name="chatbubble-outline" size={hp('2.5%')} color="#333" />
        <Text style={styles.count}>{comments}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconRow}>
        <Icon name="arrow-redo-outline" size={hp('2.5%')} color="#333" />
        <Text style={styles.count}>{shares}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconRow}>
        <Icon name="bookmark-outline" size={hp('2.5%')} color="#333" />
        <Text style={styles.count}>{bookmarks}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('1%'),
  },
  iconRow: { flexDirection: 'row', alignItems: 'center' },
  count: { marginLeft: wp('1%'), fontSize: hp('1.7%'), color: '#000' },
});

export default PostFooter;

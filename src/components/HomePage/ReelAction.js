import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Heart from '../../assets/svgs/Heart.svg';
import Comment from '../../assets/svgs/Comments.svg';
import Share from '../../assets/svgs/Share.svg';

const ReelActions = ({ likes, comments, shares, profile }) => (
  <View style={styles.container}>
    <Image source={{ uri: profile }} style={styles.avatar} />
    <View style={styles.iconBlock}>
      <Heart width={28} height={28} />
      <Text style={styles.text}>{likes}K</Text>
    </View>
    <View style={styles.iconBlock}>
      <Comment width={28} height={28} />
      <Text style={styles.text}>{comments}</Text>
    </View>
    <View style={styles.iconBlock}>
      <Share width={28} height={28} />
      <Text style={styles.text}>{shares}K</Text>
    </View>
  </View>
);

export default ReelActions;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 14,
    bottom: 100,
    alignItems: 'center',
    gap: 20,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  iconBlock: {
    alignItems: 'center',
    gap: 4,
  },
  text: {
    color: '#fff',
    fontSize: 13,
  },
});

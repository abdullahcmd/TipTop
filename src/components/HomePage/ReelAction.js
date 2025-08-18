import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HeartOutline from '../../assets/svgs/OutlinedHeart.svg';
import HeartFilled from '../../assets/svgs/HeartFilled.svg';
import Comment from '../../assets/svgs/Comments.svg';
import Share from '../../assets/svgs/Share.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const ReelActions = ({
  likes,
  comments,
  shares,
  profile,
  onPressComments,
  onPressShare,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={{ uri: profile }} style={styles.avatar} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconBlock}
        onPress={() => setIsLiked(!isLiked)}
      >
        {isLiked ? (
          <HeartFilled width={wp('7%')} height={hp('3%')} /> // Filled heart icon
        ) : (
          <HeartOutline width={wp('7%')} height={hp('3%')} /> // Outlined heart icon
        )}
        <Text style={styles.text}>{likes}K</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconBlock} onPress={onPressComments}>
        <Comment width={wp('7%')} height={hp('3%')} />
        <Text style={styles.text}>{comments}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Feed');
        }}
        style={styles.iconBlock}
      >
        <Share width={wp('7%')} height={hp('3%')} />
        <Text style={styles.text}>{shares}K</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReelActions;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: wp('4%'), // Make position responsive
    bottom: hp('10%'), // Make position responsive
    alignItems: 'center',
    gap: hp('2%'), // Adjust the gap for responsiveness
  },
  avatar: {
    width: wp('10%'), // Make avatar size responsive
    height: wp('10%'),
    borderRadius: wp('5%'),
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  iconBlock: {
    alignItems: 'center',
    gap: hp('1%'), // Adjust the gap for responsiveness
  },
  text: {
    color: '#fff',
    fontSize: wp('3.5%'), // Make font size responsive
  },
});

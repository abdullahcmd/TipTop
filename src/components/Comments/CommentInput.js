import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CommentInput = ({
  value,
  onChangeText,
  onSend,
  replyingTo,
  onCancelReply,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TouchableOpacity style={styles.plusButton} activeOpacity={0.7}>
        <Icon name="add" size={hp('3%')} color="#6F37EE" />
      </TouchableOpacity>

      <View style={styles.inputArea}>
        {replyingTo && (
          <View style={styles.replyingChip}>
            <Text style={styles.replyingChipText}>
              Replying to {replyingTo.name}
            </Text>
            <TouchableOpacity
              onPress={onCancelReply}
              style={{ marginLeft: wp('1.5%') }}
            >
              <Icon name="close" size={hp('2%')} color="#555" />
            </TouchableOpacity>
          </View>
        )}

        <TextInput
          style={styles.textInput}
          placeholder="Write a comment"
          placeholderTextColor="#9AA0A6"
          value={value}
          onChangeText={onChangeText}
          multiline
        />
      </View>

      <TouchableOpacity
        onPress={onSend}
        style={styles.sendButton}
        activeOpacity={0.8}
      >
        <Icon name="send" size={hp('2.6%')} color="#6F37EE" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: wp('3.5%'),
    paddingVertical: hp('1%'),
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E9ECF1',
  },
  plusButton: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    borderWidth: 1,
    borderColor: '#D9DCE2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('2.5%'),
    backgroundColor: '#FFF',
  },
  inputArea: {
    flex: 1,
    borderRadius: wp('4%'),
    backgroundColor: '#F2F4F7',
    paddingHorizontal: wp('3%'),
    paddingTop: hp('0.8%'),
    paddingBottom: hp('0.8%'),
  },
  replyingChip: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9F0FF',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('0.5%'),
    borderRadius: wp('3%'),
    marginTop: hp('0.5%'),
    marginBottom: hp('0.8%'),
  },
  replyingChipText: {
    fontSize: hp('1.6%'),
    color: '#2C5BEA',
    fontWeight: '600',
  },
  textInput: {
    minHeight: hp('5.2%'),
    maxHeight: hp('14%'),
    fontSize: hp('1.95%'),
    color: '#1F2328',
    paddingVertical: hp('0.6%'),
  },
  sendButton: {
    marginLeft: wp('2.5%'),
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommentInput;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PrimaryColors from '../../constants/colors';
import RoundButton from './ReusableCentreIconButton';
import HeartIcon from '../../assets/svgs/HeartIcon.svg';

const LiveCommentsSection = ({
  comments = [],
  onAccept,
  onRefuse,
  onSendMessage,
}) => {
  const [message, setMessage] = useState('');

  const renderItem = ({ item }) => {
    const isJoinRequest = item.type === 'join-request';
    return (
      <View style={styles.comment}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.message}>{item.message}</Text>

          {isJoinRequest && (
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.reject}
                onPress={() => onRefuse?.(item)}
              >
                <Text style={styles.rejectText}>Refuse</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.accept}
                onPress={() => onAccept?.(item)}
              >
                <Text style={styles.acceptText}>Accept</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage?.(message.trim());
      setMessage('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? wp('2.5%') : 0}
      style={styles.avoider}
    >
      <View style={styles.container}>
        {/* Comment Feed */}
        <FlatList
          data={comments}
          keyExtractor={(item, index) => item.id || index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />

        {/* Input Bar */}
        <View style={styles.inputRow}>
          <View style={styles.inputBar}>
            <TextInput
              placeholder="What do you think..."
              placeholderTextColor="#ddd"
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              onSubmitEditing={handleSend}
            />
          </View>

          <RoundButton style={{ backgroundColor: '#EF4444' }}>
            <HeartIcon />
          </RoundButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LiveCommentsSection;

const styles = StyleSheet.create({
  avoider: {
    width: '100%',
  },
  container: {
    padding: wp('3%'),
    width: '100%',
  },
  comment: {
    flexDirection: 'row',
    marginBottom: wp('3%'),
  },
  avatar: {
    width: wp('7%'),
    height: wp('7%'),
    borderRadius: wp('3.5%'),
    marginRight: wp('2.5%'),
  },
  username: {
    color: '#7dd3fc',
    fontWeight: '600',
    fontSize: wp('3.5%'),
  },
  message: {
    color: '#fff',
    fontSize: wp('3.2%'),
  },
  actions: {
    flexDirection: 'row',
    marginTop: wp('1.5%'),
    gap: wp('2.5%'),
  },
  reject: {
    backgroundColor: '#4444',
    paddingHorizontal: wp('3.5%'),
    paddingVertical: wp('0.8%'),
    borderRadius: 50,
  },
  rejectText: {
    color: '#fff',
    fontSize: wp('3.3%'),
  },
  accept: {
    backgroundColor: '#fff',
    paddingHorizontal: wp('3.5%'),
    paddingVertical: wp('.8%'),
    borderRadius: 50,
  },
  acceptText: {
    color: '#9333ea',
    fontWeight: '600',
    fontSize: wp('3.3%'),
  },
  inputRow: {
    marginTop: wp('2.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: wp('2.5%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('2%'),
  },
  inputBar: {
    backgroundColor: PrimaryColors.White50percent_Opacity,
    borderRadius: 30, // DO NOT CHANGE
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('2.5%'),
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: wp('4%'),
  },
});

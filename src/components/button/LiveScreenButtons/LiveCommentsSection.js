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
import PrimaryColors from '../../../constants/colors';
import RoundButton from './ReusableCentreIconButton';
import HeartIcon from '../../../assets/svgs/HeartIcon.svg';

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
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
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
    padding: 12,
    width: '100%',
  },
  comment: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 10,
  },
  username: {
    color: '#7dd3fc',
    fontWeight: '600',
    fontSize: 14,
  },
  message: {
    color: '#fff',
    fontSize: 13,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 6,
    gap: 10,
  },
  reject: {
    backgroundColor: '#4444',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  rejectText: {
    color: '#fff',
  },
  accept: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  acceptText: {
    color: '#9333ea',
    fontWeight: '600',
  },
  inputRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputBar: {
    backgroundColor: PrimaryColors.White50percent_Opacity,
    borderRadius: 30,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
});

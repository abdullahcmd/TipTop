import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CommentItem from '../../components/Comments/CommonItem';
import CommentInput from '../../components/Comments/CommentInput';
import AppSafeAreaView from '../../components/General/SafeAreaView/SafeAreaView';
import Header from '../../components/General/Headers/GeneralHeader';

/* Seed data from screenshot */
const initialComments = [
  {
    id: 'c1',
    author: 'Milea Anderson',
    avatar: 'https://i.pravatar.cc/100?img=12',
    text: 'As parents, what are the preparations for the child to be up in performance',
    time: '1 hours ago',
    replies: [
      {
        id: 'c1r1',
        author: 'Oscar Scotty',
        avatar: 'https://i.pravatar.cc/100?img=32',
        text: 'First of course the basic cycling techniques',
        time: '',
      },
    ],
  },
  {
    id: 'c2',
    author: 'Satriani Moonwalk',
    avatar: 'https://i.pravatar.cc/100?img=22',
    text: 'For more details, try to read and practice more to make it better',
    time: '2 hours ago',
    attachment: {
      thumb:
        'https://images.unsplash.com/photo-1603354350317-6ff3f6f9f6c2?q=80&w=400',
      title: 'Learn to be a cyclist',
      subtitle:
        'Start by riding three to five times for 30–60 minutes each time.',
    },
    replies: [],
  },
  {
    id: 'c3',
    author: 'Martin Luther',
    avatar: 'https://i.pravatar.cc/100?img=15',
    text: 'Many people want to ride a bike but are very lazy to start',
    time: '3 hours ago',
    replies: [],
  },
];

const CommentsScreen = () => {
  const [comments, setComments] = useState(initialComments);
  const [text, setText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null); // { commentId, name }
  const listRef = useRef(null);

  const flatData = useMemo(() => comments, [comments]);

  const handleReplyToAuthor = (commentId, name) => {
    setReplyingTo({ commentId, name });
  };

  const handleCancelReply = () => setReplyingTo(null);

  const handleSend = () => {
    const content = text.trim();
    if (!content) return;

    if (replyingTo?.commentId) {
      setComments(prev =>
        prev.map(c => {
          if (c.id !== replyingTo.commentId) return c;
          const newReply = {
            id: `${c.id}-r-${Date.now()}`,
            author: 'You',
            avatar: 'https://i.pravatar.cc/100?img=1',
            text: content,
            time: 'just now',
          };
          return { ...c, replies: [...c.replies, newReply] };
        }),
      );
    } else {
      const newComment = {
        id: `c-${Date.now()}`,
        author: 'You',
        avatar: 'https://i.pravatar.cc/100?img=1',
        text: content,
        time: 'just now',
        replies: [],
      };
      setComments(prev => [...prev, newComment]);
    }

    setText('');
    setReplyingTo(null);

    requestAnimationFrame(() => {
      listRef.current?.scrollToEnd({ animated: true });
    });
  };

  return (
    <AppSafeAreaView>
      <Header title="Comments" />
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={hp('1.5%')}
      >
        <FlatList
          ref={listRef}
          data={flatData}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <CommentItem item={item} onReplyToAuthor={handleReplyToAuthor} />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />

        <View style={{ height: hp('1%') }} />

        <CommentInput
          value={text}
          onChangeText={setText}
          onSend={handleSend}
          replyingTo={replyingTo}
          onCancelReply={handleCancelReply}
        />
      </KeyboardAvoidingView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F6F7F9' },
  listContent: {
    paddingHorizontal: wp('3.5%'),
    paddingTop: hp('2%'),
    backgroundColor: 'white',
    paddingBottom: hp('1%'),
  },
  separator: {
    height: 1,
    backgroundColor: '#E9ECF1',
    marginVertical: hp('1.8%'),
  },
});

export default CommentsScreen;

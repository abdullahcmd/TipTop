import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// ---------- Small Reusable Bits ----------
const Pill = ({ children, colors = ['#FFA500', '#FF7A00'], style }) => (
  <LinearGradient
    colors={colors}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={[styles.pill, style]}
  >
    <Text style={styles.pillText}>{children}</Text>
  </LinearGradient>
);

const UserBadge = ({ avatar, score, name, align = 'left' }) => {
  const isLeft = align === 'left';
  return (
    <View
      style={[
        styles.userBadge,
        isLeft ? { left: wp('5%') } : { right: wp('5%') },
      ]}
    >
      <Pill style={styles.scorePill}>{score}</Pill>
      <View
        style={[
          styles.badgeRow,
          { flexDirection: isLeft ? 'row' : 'row-reverse' },
        ]}
      >
        <Image source={{ uri: avatar }} style={styles.badgeAvatar} />
        <Text
          style={[
            styles.badgeName,
            isLeft ? { marginLeft: 8 } : { marginRight: 8 },
          ]}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};

const VSBadge = ({ timer = '4:19' }) => (
  <View style={styles.vsWrap}>
    <Text style={styles.vsText}>VS</Text>
    <Pill colors={['#A06BFF', '#6E5BFF']} style={styles.timerPill}>
      {timer}
    </Pill>
  </View>
);

const ChatBubble = ({ avatar, name, text, highlight }) => (
  <View style={[styles.chatBubble, highlight && styles.chatBubbleHighlight]}>
    <Image source={{ uri: avatar }} style={styles.chatAvatar} />
    <View style={{ flex: 1 }}>
      <Text style={styles.chatName}>
        {name} <Ionicons name="checkmark-circle" size={12} color="#5AB2FF" />
      </Text>
      <Text style={styles.chatText}>{text}</Text>
    </View>
    {highlight ? (
      <View style={styles.counterPill}>
        <Text style={styles.counterText}>82</Text>
      </View>
    ) : null}
  </View>
);

// ---------- Video cell (flex-based, clips itself) ----------
const VideoCell = ({ source }) => (
  <View style={styles.videoCell}>
    <Video
      source={{ uri: source }}
      style={StyleSheet.absoluteFill}
      resizeMode="cover"
      repeat
      muted
      paused={false}
      ignoreSilentSwitch="obey"
    />
    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.35)']}
      style={styles.bottomFade}
    />
  </View>
);

// ---------- The Screen ----------
const LiveBattleScreen = () => {
  const [chat, setChat] = useState([
    {
      id: '1',
      avatar: 'https://i.pravatar.cc/60?img=32',
      name: 'Roxy_Roxy',
      text: 'wow, what a figure, what you do dear girl? 😎',
      highlight: false,
    },
    {
      id: '2',
      avatar: 'https://i.pravatar.cc/60?img=14',
      name: 'DashyJames✌︎',
      text: '',
      highlight: true,
    },
    {
      id: '3',
      avatar: 'https://i.pravatar.cc/60?img=28',
      name: 'jessi_joshua',
      text: 'Amazing hottie ❤️❤️🔥🔥',
      highlight: false,
    },
  ]);
  const [inputText, setInputText] = useState('');

  const leftUser = {
    name: 'roy_joseph',
    avatar: 'https://i.pravatar.cc/80?img=12',
    score: '12430',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  };
  const rightUser = {
    name: 'sofiya_stefen',
    avatar: 'https://i.pravatar.cc/80?img=66',
    score: '8253',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newComment = {
      id: Date.now().toString(),
      avatar: 'https://i.pravatar.cc/60?img=15',
      name: 'You',
      text: inputText.trim(),
      highlight: false,
    };
    setChat(prev => [newComment, ...prev]);
    setInputText('');
  };

  const renderChatItem = ({ item }) => <ChatBubble {...item} />;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.card}>
        {/* FLEX row that holds 1 or 2 videos; remove one and the other fills width */}
        <View style={styles.videosRow}>
          <VideoCell source={leftUser.video} />
          {/* Comment this out safely; left one will expand */}
          <VideoCell source={rightUser.video} />
        </View>

        {/* center divider (only show when both videos are present) */}
        <View style={styles.centerDivider} />

        {/* top badges */}
        <UserBadge
          avatar={leftUser.avatar}
          score={leftUser.score}
          name={leftUser.name}
          align="left"
        />
        <UserBadge
          avatar={rightUser.avatar}
          score={rightUser.score}
          name={rightUser.name}
          align="right"
        />

        {/* centered VS + timer */}
        <VSBadge timer="4:19" />

        {/* floating chat (over both) */}
        <View style={styles.chatOverlay}>
          <FlatList
            data={chat}
            keyExtractor={item => item.id}
            renderItem={renderChatItem}
            inverted
            contentContainerStyle={{ padding: 8 }}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/* bottom input + actions */}
        <View style={styles.actionsRow}>
          <View style={styles.inputWrap}>
            <TextInput
              value={inputText}
              onChangeText={setInputText}
              placeholder="What do you think.."
              placeholderTextColor="rgba(255,255,255,0.85)"
              style={styles.textInput}
              onSubmitEditing={handleSend}
              returnKeyType="send"
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.roundBtn}>
            <Ionicons name="gift" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.roundBtn, { backgroundColor: '#FF4757' }]}
          >
            <Ionicons name="heart" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LiveBattleScreen;

// ---------- styles ----------
const styles = StyleSheet.create({
  card: { flex: 1, overflow: 'hidden', backgroundColor: '#111' },

  // NEW: flex row that holds videos
  videosRow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  videoCell: {
    flex: 1,
    overflow: 'hidden',
  },
  bottomFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: hp('20%'),
  },

  // divider & center VS
  centerDivider: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1.5,
    left: '50%',
    backgroundColor: 'rgba(255,255,255,0.45)',
  },
  vsWrap: {
    position: 'absolute',
    top: hp('8%'),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  vsText: { fontSize: wp('11%'), fontWeight: '900', color: '#fff' },
  timerPill: {
    marginTop: 6,
    height: wp(7),
    // textAlign: 'center',
    justifyContent: 'center',
    //padding: wp(2),
    alignItems: 'center',
    width: wp(20),
    borderRadius: 12,
  },

  // badges
  userBadge: { position: 'absolute', top: hp('6%') },
  scorePill: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    //paddingHorizontal: 14,
    height: wp(7),
    //padding: wp(2),
    alignItems: 'center',
    width: wp(20),
    //   paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 10,
  },
  pill: { borderRadius: 999 },
  pillText: {
    color: '#111',
    fontWeight: '800',
    //  textAlign: 'center',
    fontSize: wp('3.9%'),
  },
  badgeRow: { alignItems: 'center' },
  badgeAvatar: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    borderWidth: 3,
    borderColor: '#9BE1FF',
    backgroundColor: '#fff',
  },
  badgeName: { color: '#fff', fontSize: wp('4%'), fontWeight: '700' },

  // chat overlay
  chatOverlay: {
    position: 'absolute',
    left: wp('4%'),
    right: wp('4%'),
    bottom: hp('10%'),
    width: wp(70),
    maxHeight: hp('30%'),
    borderRadius: 12,
    paddingVertical: 4,
  },
  chatBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.10)',
    padding: 10,
    borderRadius: 14,
    marginBottom: 6,
  },
  chatBubbleHighlight: {
    backgroundColor: 'rgba(17,17,17,0.55)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
  },
  chatAvatar: { width: 32, height: 32, borderRadius: 16, marginRight: 8 },
  chatName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: wp('3.6%'),
    marginBottom: 2,
  },
  chatText: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: wp('3.6%'),
    lineHeight: 18,
  },
  counterPill: {
    marginLeft: 8,
    backgroundColor: '#FF8A00',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  counterText: { color: '#111', fontWeight: '800', fontSize: 12 },

  // input & actions
  actionsRow: {
    position: 'absolute',
    left: wp('4%'),
    right: wp('4%'),
    bottom: hp('3.5%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrap: {
    flex: 1,
    backgroundColor: 'rgba(17,17,17,0.35)',
    paddingHorizontal: 12,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    marginRight: 10,
  },
  textInput: { color: '#fff', fontSize: wp('3.8%'), height: '100%' },
  roundBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    backgroundColor: '#8A60FF',
  },
});


import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import EyeIcon from '../../assets/svgs/EyeIcon.svg';
import DollarIcon from '../../assets/svgs/DollarIcon.svg';
import PeopleIcon from '../../assets/svgs/People.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const LiveTopBar = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.stopButton} onPress={() => setEndOpen(true)}>
          <Text style={styles.stopText}>Stop</Text>
        </TouchableOpacity>
        <View style={styles.statusBox}>
          <EyeIcon />
          <Text style={styles.statusText}>23K</Text>
        </View>
        <View style={styles.statusBox}>
          <DollarIcon />
          <Text style={styles.statusText}>823</Text>
        </View>
        <TouchableOpacity style={styles.statusBox} onPress={() => setOpen(true)}>
          <PeopleIcon />
        </TouchableOpacity>

      </View>
      <MembersModal visible={open} onClose={() => setOpen(false)} />
      <EndStreamConfirmModal
        visible={endOpen}
        onCancel={() => setEndOpen(false)}
        onConfirm={() => {
          setEndOpen(false);
          navigation.navigate('EndLiveScreen')
        }}
      />
    </SafeAreaView>
  );
};

export default LiveTopBar;
export function MembersModal({ visible, onClose }) {
  const [tab, setTab] = useState('Requests'); // 'Requests' | 'Audience' | 'Invited' | 'Co-hosts'
  const [query, setQuery] = useState('');

  // simple open/close animation
  const duration = 220;
  const backdrop = useRef(new Animated.Value(0)).current; // 0..1
  const translateY = useRef(new Animated.Value(40)).current;
  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(backdrop, { toValue: 1, duration, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 0, duration, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(backdrop, { toValue: 0, duration: 180, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 40, duration: 180, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
      ]).start();
    }
  }, [visible]);

  // sample data (replace with your own)
  const requests = useMemo(
    () => [
      { id: '1', name: 'jesica_joseph', full: 'Jesica Joseph', avatar: 'https://i.pravatar.cc/100?img=5', verified: true },
      { id: '2', name: "jenny_dsouza", full: "Jenny D'souza", avatar: 'https://i.pravatar.cc/100?img=48', verified: false },
      { id: '3', name: 'WilsonDukes', full: 'Wilson Dukes', avatar: 'https://i.pravatar.cc/100?img=13', verified: true },
    ],
    []
  );
  const invited = useMemo(
    () => [
      { id: '4', name: 'jesica_joseph', full: 'Jesica Joseph', avatar: 'https://i.pravatar.cc/100?img=5', verified: true },
      { id: '5', name: "jenny_d'souza", full: "Jenny D'souza", avatar: 'https://i.pravatar.cc/100?img=58', verified: true },
      { id: '6', name: 'WilsonDukes', full: 'Wilson Dukes', avatar: 'https://i.pravatar.cc/100?img=66', verified: true },
    ],
    []
  );
  const cohosts = useMemo(
    () => [
      { id: '7', name: 'jesica_joseph', full: 'Jesica Joseph', avatar: 'https://i.pravatar.cc/100?img=15', verified: true },
      { id: '8', name: "jenny d'souza", full: "Jenny D'souza", avatar: 'https://i.pravatar.cc/100?img=32', verified: false },
      { id: '9', name: 'WilsonDukes', full: 'Wilson Dukes', avatar: 'https://i.pravatar.cc/100?img=70', verified: true },

    ],
    []
  );

  const audience = useMemo(() => [], []);

  // filter for invited tab when searching
  const filteredInvited = invited.filter(
    (x) => !query || x.name.toLowerCase().includes(query.toLowerCase()) || x.full.toLowerCase().includes(query.toLowerCase())
  );

  const dataByTab = tab === 'Requests' ? requests : tab === 'Audience' ? audience : tab === 'Invited' ? filteredInvited : cohosts;

  return (
    <Modal visible={visible} transparent animationType="none" statusBarTranslucent>
      {/* Backdrop */}
      <Pressable onPress={onClose} style={StyleSheet.absoluteFill}>
        <Animated.View
          pointerEvents="none"
          style={[styles.backdrop, { opacity: backdrop.interpolate({ inputRange: [0, 1], outputRange: [0, 0.5] }) }]}>
        </Animated.View>
      </Pressable>

      {/* Bottom sheet */}
      <SafeAreaView style={styles.bottomSafe}>
        <Animated.View style={[styles.sheet, { transform: [{ translateY }] }]}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Members</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={22} color="#9aa0a6" />
            </TouchableOpacity>
          </View>

          {/* Tabs */}
          <View style={styles.tabsRow}>
            {['Requests', 'Audience', 'Invited', 'Co-hosts'].map((t) => (
              <TouchableOpacity
                key={t}
                onPress={() => setTab(t)}
                style={[styles.tab, tab === t && styles.tabActive]}
                activeOpacity={0.9}
              >
                <Text style={[styles.tabText, tab === t && styles.tabTextActive]}>{t}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Search only on Invited */}
          {tab === 'Invited' && (
            <View style={styles.searchWrap}>
              <Ionicons name="search" size={18} color="#9aa0a6" />
              <TextInput
                placeholder="Search here..."
                placeholderTextColor="#9aa0a6"
                style={styles.searchInput}
                value={query}
                onChangeText={setQuery}
              />
            </View>
          )}

          {/* List */}
          {dataByTab.length === 0 ? (
            <View style={{ alignItems: 'center', paddingVertical: 28 }}>
              <Text style={{ color: '#9aa0a6' }}>No users yet.</Text>
            </View>
          ) : (
            <FlatList
              data={dataByTab}
              keyExtractor={(it) => it.id}
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <Image source={{ uri: item.avatar }} style={styles.avatar} />
                  <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.name}>@{item.name}</Text>
                      {item.verified && (
                        <View style={styles.verifiedDot}>
                          <Ionicons name="checkmark" size={10} color="#fff" />
                        </View>
                      )}
                    </View>
                    <Text style={styles.sub}>{item.full}</Text>
                  </View>

                  {/* Right actions per tab */}
                  {tab === 'Requests' && (
                    <TouchableOpacity style={styles.inviteBtn}>
                      <Text style={styles.inviteText}>Invite</Text>
                    </TouchableOpacity>
                  )}
                  {tab === 'Invited' && (
                    <TouchableOpacity style={styles.cancelBtn}>
                      <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                  )}
                  {tab === 'Co-hosts' && (
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity style={styles.roundIconBtn}>
                        <Ionicons name="mic-off" size={16} color="#7a7a7a" />
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.roundIconBtn, styles.roundIconDanger]}>
                        <Ionicons name="trash" size={16} color="#ef4444" />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
              showsVerticalScrollIndicator={false}
            />
          )}

          {/* iOS home bar indicator */}
          <View style={styles.homeBar} />
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
}

export function EndStreamConfirmModal({
  visible,
  onCancel,
  onConfirm,
  title = 'End The Stream!',
  description = 'Do you really want to end this streaming?',
  cancelText = 'Cancel',
  confirmText = 'Yes',
}) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 180, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
        Animated.spring(scale, { toValue: 1, bounciness: 6, speed: 12, useNativeDriver: true }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, { toValue: 0, duration: 140, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
        Animated.timing(scale, { toValue: 0.95, duration: 140, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
      ]).start();
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="none" statusBarTranslucent>
      {/* Backdrop */}
      <Pressable onPress={onCancel} style={styleModalEnd.backdrop}>
        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.45)', opacity }]} />
      </Pressable>

      {/* Card */}
      <View style={styleModalEnd.centerWrap} pointerEvents="box-none">
        <Animated.View style={[styleModalEnd.card, { transform: [{ scale }] }]}>
          <Text style={styleModalEnd.title}>{title}</Text>
          <Text style={styleModalEnd.desc}>{description}</Text>

          <View style={styleModalEnd.row}>
            <Pressable onPress={onCancel} style={({ pressed }) => [styleModalEnd.cancelBtn, pressed && { opacity: 0.8 }]}>
              <Text style={styleModalEnd.cancelText}>{cancelText}</Text>
            </Pressable>

            <Pressable onPress={onConfirm} style={{ flex: 1, marginLeft: 10 }}>
              <LinearGradient
                colors={["#cf37ff", "#8b5cf6"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styleModalEnd.yesGrad}
              >
                <Text style={styleModalEnd.yesText}>{confirmText}</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styleModalEnd = StyleSheet.create({
  backdrop: { ...StyleSheet.absoluteFillObject },
  centerWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 24,
    marginBottom:50
  },
  card: {
    width: '100%',
    borderRadius: 22,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  title: { textAlign: 'center', color: '#111', fontSize: 18, fontWeight: '900' },
  desc: { textAlign: 'center', color: '#7a7a86', marginTop: 8, marginBottom: 20 },
  row: { flexDirection: 'row', alignItems: 'center' },
  cancelBtn: {
    flex: 1,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#f1f2f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: { color: '#111', fontWeight: '800' },
  yesGrad: {
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yesText: { color: '#fff', fontWeight: '800' },
});
const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: '#000' },
  bottomSafe: { flex: 1, justifyContent: 'flex-end' },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    maxHeight: '78%',
  },
  header: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
  },
  title: { fontSize: 18, fontWeight: '800', color: '#111' },
  closeBtn: { position: 'absolute', right: 8, top: 8, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },

  tabsRow: {
    flexDirection: 'row',
    // paddingHorizontal: 15,
    marginHorizontal: 15,
    paddingTop: 6,
    paddingBottom: 6,
    justifyContent: 'space-between',
    backgroundColor: "#f6f6f6",
    borderRadius: 10,
  },
  tab: {
    flex: 1,
    height: 34,
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: '#f2f2f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: { backgroundColor: '#fff', },
  tabText: { color: '#7a7a86', fontWeight: '400', fontSize: 12 },
  tabTextActive: { color: '#111', fontWeight: '400', fontSize: 12 },

  searchWrap: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 6,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f2f2f4',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: { marginLeft: 8, flex: 1, color: '#111' },

  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  avatar: { width: 42, height: 42, borderRadius: 21, marginRight: 10 },
  name: { color: '#111', fontWeight: '800' },
  sub: { color: '#8b8b95', marginTop: 2 },
  verifiedDot: {
    marginLeft: 6,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: { height: StyleSheet.hairlineWidth, backgroundColor: '#eee' },

  inviteBtn: {
    paddingHorizontal: 16,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ec4899',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteText: { color: '#fff', fontWeight: '800' },

  cancelBtn: {
    paddingHorizontal: 16,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: { color: '#111', fontWeight: '800' },

  roundIconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#e5e7eb',
    marginLeft: 8,
  },
  roundIconDanger: { borderColor: '#fecaca' },

  homeBar: { alignSelf: 'center', width: 120, height: 5, borderRadius: 3, backgroundColor: '#e6e6ea', marginVertical: 8 },

  safeArea: {
    paddingHorizontal: wp('4%'),
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    marginTop: wp('1.5%'),

  },
  stopButton: {
    backgroundColor: 'red',
    borderRadius: 8, // KEEP FIXED
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('1.8%'),
  },
  stopText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('3.5%'),
  },
  statusGroup: {
    flexDirection: 'row',
    gap: wp('2%'),
    alignItems: 'center',
  },
  statusBox: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('1.8%'),
    borderRadius: 20, // KEEP FIXED
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    marginLeft: wp('1.5%'),
    fontSize: wp('3.3%'),
  },

});

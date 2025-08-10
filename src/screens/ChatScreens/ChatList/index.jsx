import React, { useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, Image, FlatList, StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CHATS = [
  { id: '1', name: 'Daniel Santio', msg: 'Good luck and take care', time: '11:20 AM', unread: 3, online: true, avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: '2', name: 'Amber Julia', msg: 'Ok, Got it!', time: 'Yesterday', unread: 1, online: false, avatar: 'https://i.pravatar.cc/100?img=5' },
  { id: '3', name: 'Satria Moonwalk', msg: 'How have you been?', time: 'Tuesday', unread: 0, online: true, avatar: 'https://i.pravatar.cc/100?img=8' },
  { id: '4', name: 'Jane Sunny', msg: 'Yes, please!', time: 'Monday', unread: 0, online: true, avatar: 'https://i.pravatar.cc/100?img=47' },
  { id: '1', name: 'Daniel Santio', msg: 'Good luck and take care', time: '11:20 AM', unread: 3, online: true, avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: '2', name: 'Amber Julia', msg: 'Ok, Got it!', time: 'Yesterday', unread: 1, online: false, avatar: 'https://i.pravatar.cc/100?img=5' },
  { id: '3', name: 'Satria Moonwalk', msg: 'How have you been?', time: 'Tuesday', unread: 0, online: true, avatar: 'https://i.pravatar.cc/100?img=8' },
  { id: '4', name: 'Jane Sunny', msg: 'Yes, please!', time: 'Monday', unread: 0, online: true, avatar: 'https://i.pravatar.cc/100?img=47' },
  { id: '1', name: 'Daniel Santio', msg: 'Good luck and take care', time: '11:20 AM', unread: 3, online: true, avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: '2', name: 'Amber Julia', msg: 'Ok, Got it!', time: 'Yesterday', unread: 1, online: false, avatar: 'https://i.pravatar.cc/100?img=5' },
  { id: '3', name: 'Satria Moonwalk', msg: 'How have you been?', time: 'Tuesday', unread: 0, online: true, avatar: 'https://i.pravatar.cc/100?img=8' },
  { id: '4', name: 'Jane Sunny', msg: 'Yes, please!', time: 'Monday', unread: 0, online: true, avatar: 'https://i.pravatar.cc/100?img=47' },
];

const CALLS = [
  { id: 'c1', name: 'Daniel Santio', time: '11:20 AM', status: 'Outgoing', color: '#2ecc71', avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: 'c2', name: 'Jane Sunny', time: 'Yesterday', status: 'Missed', color: '#e74c3c', avatar: 'https://i.pravatar.cc/100?img=47' },
  { id: 'c3', name: 'Ahzim Nakula', time: 'Tuesday', status: 'Incoming', color: '#2ecc71', avatar: 'https://i.pravatar.cc/100?img=21' },
  { id: 'c1', name: 'Daniel Santio', time: '11:20 AM', status: 'Outgoing', color: '#2ecc71', avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: 'c2', name: 'Jane Sunny', time: 'Yesterday', status: 'Missed', color: '#e74c3c', avatar: 'https://i.pravatar.cc/100?img=47' },
  { id: 'c3', name: 'Ahzim Nakula', time: 'Tuesday', status: 'Incoming', color: '#2ecc71', avatar: 'https://i.pravatar.cc/100?img=21' },
  { id: 'c1', name: 'Daniel Santio', time: '11:20 AM', status: 'Outgoing', color: '#2ecc71', avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: 'c2', name: 'Jane Sunny', time: 'Yesterday', status: 'Missed', color: '#e74c3c', avatar: 'https://i.pravatar.cc/100?img=47' },
  { id: 'c3', name: 'Ahzim Nakula', time: 'Tuesday', status: 'Incoming', color: '#2ecc71', avatar: 'https://i.pravatar.cc/100?img=21' },
];

function ChatsTab({ data, navigation }) {

  const renderItem = (({ item }) => (
    <TouchableOpacity style={styles.row} activeOpacity={0.85} onPress={() => { navigation.navigate('ChatScreen', { user: item }) }}>
      <View style={styles.avatarWrap}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        {item.online && <View style={styles.dot} />}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.msg} numberOfLines={1}>{item.msg}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unread > 0 && (
          <View style={styles.badge}><Text style={styles.badgeText}>{item.unread}</Text></View>
        )}
      </View>
    </TouchableOpacity>
  ));

  return (
    <FlatList
      data={data}
      keyExtractor={(i) => i.id}
      renderItem={renderItem}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

function CallsTab({ data, navigation }) {
  const renderItem = useCallback(({ item }) => (
    <TouchableOpacity style={styles.row} activeOpacity={0.85} onPress={() => { navigation.navigate('LiveCallScreen') }}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={[styles.sub, { color: item.color }]}>{item.status}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  ), []);

  return (
    <FlatList
      data={data}
      keyExtractor={(i) => i.id}
      renderItem={renderItem}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default function MessagesTabsScreen({ navigation }) {
  const [tab, setTab] = useState('chats'); // 'chats' | 'calls'

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F7" />

      {/* Header */}
      <View style={styles.headercol}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Ionicons name="chevron-back" size={22} color="#111" />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconBtn}><Text style={styles.icon}>🔎</Text></TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}><Text style={styles.icon}>✎</Text></TouchableOpacity>
          </View>

        </View>
        <View style={{ height: 50 }}>
          <Text style={styles.headerTitle}>{tab === 'chats' ? 'Message' : 'Calls'}</Text>
        </View>
      </View>


      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setTab('chats')} style={styles.tabItem}>
          <Text style={tab === 'chats' ? styles.tabTextActive : styles.tabText}>Chats</Text>
          {tab === 'chats' && <View style={styles.tabUnderline} />}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTab('calls')} style={styles.tabItem}>
          <Text style={tab === 'calls' ? styles.tabTextActive : styles.tabText}>Calls</Text>
          {tab === 'calls' && <View style={styles.tabUnderline} />}
        </TouchableOpacity>
      </View>

      {/* Content: use BOTH components, show one at a time */}
      <View style={{ flex: 1 }}>
        {tab === 'chats'
          ? <ChatsTab data={CHATS}
            navigation={navigation} />
          : <CallsTab data={CALLS} navigation={navigation} />
        }
      </View>
    </SafeAreaView>
  );
}

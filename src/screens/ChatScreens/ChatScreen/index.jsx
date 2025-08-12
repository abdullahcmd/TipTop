import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MESSAGES = [
  { id: 'm1', type: 'other', text: "I like living here, it's not too big and it has great weather all year long, perfect!", time: '10:11 AM' },
  { id: 'm2', type: 'me', text: 'Sure!', time: '11:23 AM' },
  { id: 'm3', type: 'me', text: 'There is a Rose Parade in August', time: '11:23 AM' },
  { id: 'm4', type: 'other', text: "There's a parade too", time: '11:35 AM' },
  { id: 'm5', type: 'other', text: "It has wonderful restaurants and close to the mountains but I'm not ever going to leave", time: '11:35 AM' },
  { id: 'm6', type: 'me', text: "Ok it's very easy", time: '11:42 AM' },
  { id: 'm7', type: 'me', voice: true, duration: '0:53', time: '11:43 AM' },
];

export default function ChatScreen({ route }) {
  const { user } = route.params || {}; 
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    if (item.voice) {
      return (
        <View style={[styles.bubbleRow, item.type === 'me' ? styles.right : styles.left]}>
          <View style={[styles.voice, item.type === 'me' ? styles.bubbleMe : styles.bubbleOther]}>
            <Text style={{ color: '#fff' }}>▶︎ 〰〰〰〰〰〰〰〰〰〰 </Text>
            <Text style={styles.voiceTime}>{item.duration}</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={[styles.bubbleRow, item.type === 'me' ? styles.right : styles.left]}>
        <View style={[styles.bubble, item.type === 'me' ? styles.bubbleMe : styles.bubbleOther]}>
          <Text style={[styles.msgText, item.type === 'me' ? { color: '#fff' } : { color: '#111' }]}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F7" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.goBack()}><Ionicons name="chevron-back" size={22} color="#111" /></TouchableOpacity>
        <Image source={{ uri: 'https://i.pravatar.cc/100?img=2' }} style={styles.headerAvatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.headerName}>Olivia Gallagher</Text>
          <Text style={styles.headerSub}>Active now</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('LiveCallScreen')} style={styles.iconBtn}><Text style={styles.icon}>📞</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('LiveCallScreen')} style={styles.iconBtn}><Text style={styles.icon}>📹</Text></TouchableOpacity>
      </View>

      {/* Messages */}
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 8, paddingBottom: 12 }}
        data={MESSAGES}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      {/* Input */}
      <View style={styles.inputWrap}>
        <TouchableOpacity><Text style={styles.plus}>＋</Text></TouchableOpacity>
        <TextInput
          placeholder="Write a comment"
          placeholderTextColor="#969696"
          style={styles.input}
        />
        <TouchableOpacity><Text style={styles.inputIcon}>🙂</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.inputIcon}>📎</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.inputIcon}>🎤</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
const CALLS = [
  { id: '1', name: 'Daniel Santio', time: '11:20 AM', type: 'Outgoing', color: '#2ecc71', avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: '2', name: 'Jane Sunny', time: 'Yesterday', type: 'Missed', color: '#e74c3c', avatar: 'https://i.pravatar.cc/100?img=47' },
  { id: '3', name: 'Ahzim Nakula', time: 'Tuesday', type: 'Incoming', color: '#2ecc71', avatar: 'https://i.pravatar.cc/100?img=21' },
  { id: '4', name: 'Richard Moons', time: 'Monday', type: 'Outgoing', color: '#2ecc71', avatar: 'https://i.pravatar.cc/100?img=14' },
  { id: '5', name: 'Nicole Foster', time: '4/25/20', type: 'Missed', color: '#e74c3c', avatar: 'https://i.pravatar.cc/100?img=39' },
];

export default function CallsScreen({navigation}) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.row} activeOpacity={0.8}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={[styles.sub, { color: item.color }]}>
          {item.type}
        </Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity><Text style={styles.icon}>‹</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Calls</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}><Text style={styles.icon}>🔎</Text></TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}><Text style={styles.icon}>✎</Text></TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
                  style={styles.tabItem}
                  onPress={() => navigation.navigate('Messages')}
                  activeOpacity={0.8}
                >
                  <Text style={styles.tabText}>Chat</Text>
                </TouchableOpacity>
        <View style={styles.tabItemActive}>
          <Text style={styles.tabTextActive}>Calls</Text>
          <View style={styles.tabUnderline} />
        </View>
      </View>

      <FlatList
        data={CALLS}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

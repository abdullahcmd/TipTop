import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import MicOff from '../../../../assets/svgs/Mic.svg';
import Trash from '../../../../assets/svgs/Delete.svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const initialCoHosts = [
  {
    id: '1',
    username: 'jesica_joseph',
    fullname: 'Jesica Joseph',
    avatar: 'https://i.pravatar.cc/150?img=9',
    muted: false,
  },
  {
    id: '2',
    username: "jenny_d'souza",
    fullname: "Jenny D'souza",
    avatar: 'https://i.pravatar.cc/150?img=10',
    muted: false,
  },
  {
    id: '3',
    username: 'WilsonDukes',
    fullname: 'Wilson Dukes',
    avatar: 'https://i.pravatar.cc/150?img=11',
    muted: false,
  },
];

const CoHostsTab = () => {
  const [cohosts, setCohosts] = useState(initialCoHosts);

  const toggleMute = id => {
    setCohosts(prev =>
      prev.map(item =>
        item.id === id ? { ...item, muted: !item.muted } : item,
      ),
    );
  };

  const deleteCohost = id => {
    setCohosts(prev => prev.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.infoBlock}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.fullname}>{item.fullname}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={[
            styles.iconBtn,
            { backgroundColor: item.muted ? '#f43f5e20' : '#E5E5E5' },
          ]}
          onPress={() => toggleMute(item.id)}
        >
          <MicOff color={item.muted ? '#f43f5e' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => deleteCohost(item.id)}
        >
          <Trash />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={{
        height: '150%',
        paddingBottom: 24,
      }}
    >
      <FlatList
        data={cohosts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        scrollEnabled={true} // ✅ disables scroll conflicts
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default CoHostsTab;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    flex: 1,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  infoBlock: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  fullname: {
    color: '#888',
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  iconBtn: {
    padding: 10,
    borderRadius: 50,
  },
  deleteBtn: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#f43f5e',
  },
});

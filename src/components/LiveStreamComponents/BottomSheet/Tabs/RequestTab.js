import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const users = [
  {
    id: '1',
    name: 'jesica_joseph',
    subtitle: 'Jesica Joseph',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'jenny_dsouza',
    subtitle: 'Jenny D’Souza',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'WilsonDukes',
    subtitle: 'Wilson Dukes',
    image: 'https://i.pravatar.cc/150?img=3',
  },
];

const RequestTab = () => {
  return (
    <View style={{ paddingHorizontal: wp(4), height: '160%' }}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.userRow}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View>
              <Text style={styles.username}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <TouchableOpacity style={styles.inviteBtn}>
              <Text style={styles.inviteText}>Invite</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default RequestTab;

const styles = StyleSheet.create({
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 10,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  username: {
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    color: '#555',
  },
  inviteBtn: {
    marginLeft: 'auto',
    backgroundColor: '#ec4899',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  inviteText: {
    color: '#fff',
    fontWeight: '600',
  },
});

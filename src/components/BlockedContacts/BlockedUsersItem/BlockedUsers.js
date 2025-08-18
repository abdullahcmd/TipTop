import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Verified from '../../../assets/svgs/Id_Verified.svg';

const BlockedUsers = ({
  UsersList = [],
  ButtonText = 'Unblock',
  onPress,
  showButton = true,
  SearchBar = true,
  style2,
  ListHeader = null,
  ListFooter = null,
}) => {
  const renderItem = ({ item }) => (
    <View style={styles.userRow}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>
          {item.username} {'  '}
          <Verified />
        </Text>
        <Text style={styles.fullname}>{item.fullname}</Text>
      </View>

      {showButton && (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onPress?.(item)}
          activeOpacity={0.85}
        >
          <Text style={styles.actionText}>{ButtonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={[styles.container, style2]}>
      {SearchBar && (
        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="#888" />
          <TextInput
            placeholder="Search here..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>
      )}

      <FlatList
        data={UsersList}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: wp(2), paddingBottom: wp(4) }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
      />
    </View>
  );
};

export default BlockedUsers;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: wp(4),
  },
  searchBar: {
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 44,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 14,
    flex: 1,
    color: '#333',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },
  userInfo: { flex: 1 },
  username: {
    fontWeight: '700',
    fontSize: 15,
    color: '#000',
  },
  fullname: {
    color: '#888',
    fontSize: 13,
  },
  actionButton: {
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  actionText: {
    fontSize: 13,
    color: '#444',
    fontWeight: '600',
  },
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Verified from '../../../../assets/svgs/Id_Verified.svg';
const InvitedTab = ({
  UsersList,
  ButtonText,
  onPress,
  SearchBar = true,
  style2,
}) => {
  const renderItem = ({ item }) => (
    <View style={styles.userRow}>
      <Image source={item.image} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>
          {item.username}
          {'  '}
          <Verified />
        </Text>
        <Text style={styles.fullname}>{item.fullname}</Text>
      </View>
      <TouchableOpacity style={styles.cancelButton} onPress={onPress}>
        <Text style={styles.cancelText}>{ButtonText}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, style2]}>
      {SearchBar && (
        <View style={[styles.searchBar]}>
          <Feather name="search" size={18} color="#888" />
          <TextInput
            placeholder="Search here..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>
      )}
      {/* List */}
      <FlatList
        data={UsersList}
        keyExtractor={item => item.id}
        scrollEnabled={true}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 12 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default InvitedTab;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: widthPercentageToDP(12),
    // paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // flex: 1,
  },

  searchBar: {
    marginTop: 16,
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
  userInfo: {
    flex: 1,
  },
  username: {
    fontWeight: '700',
    fontSize: 15,
    color: '#000',
  },
  fullname: {
    color: '#888',
    fontSize: 13,
  },
  cancelButton: {
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  cancelText: {
    fontSize: 13,
    color: '#444',
    fontWeight: '600',
  },
});

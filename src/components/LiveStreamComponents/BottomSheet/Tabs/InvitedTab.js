import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Verified from '../../../../assets/svgs/Id_Verified.svg';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

const InvitedTab = ({
  UsersList,
  ButtonText,
  onPress,
  showButton = true,
  SearchBar = true,
  style2,
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
        <TouchableOpacity style={styles.cancelButton} onPress={onPress}>
          <Text style={styles.cancelText}>{ButtonText}</Text>
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
      <BottomSheetFlatList
        data={UsersList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: wp(2) }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default InvitedTab;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  searchBar: {
    // marginTop: 16,
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

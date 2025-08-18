import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SavedPostCard from '../../../components/SavedPosts/SavedPostCard';
import images from '../../../constants/images';

const postsData = [
  { id: '1', image: images.savedPost1, views: '4.5M' },
  { id: '2', image: images.savedPost2, views: '1.2M' },
  { id: '3', image: images.savedPost3, views: '2.6M' },
  { id: '4', image: images.savedPost4, views: '12.6M' },
  { id: '5', image: images.savedPost1, views: '4.5M' },
  { id: '6', image: images.savedPost2, views: '1.2M' },
  { id: '7', image: images.savedPost3, views: '12.6M' },
  { id: '8', image: images.savedPost4, views: '4.5M' },
  { id: '9', image: images.savedPost1, views: '1.2M' },
];

const SavedPostsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Feed');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={wp('6%')} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saved Posts</Text>
        <View style={{ width: wp('6%') }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Feed' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('Feed')}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Feed' && styles.activeTabText,
            ]}
          >
            Feed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Reels' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('Reels')}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Reels' && styles.activeTabText,
            ]}
          >
            Reels
          </Text>
        </TouchableOpacity>
      </View>

      {/* List Container with black background */}
      <View style={styles.listContainer}>
        <FlatList
          data={postsData}
          renderItem={({ item, index }) => (
            <SavedPostCard image={item.image} views={item.views} />
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.gridContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: hp('2%'),
    paddingHorizontal: wp('6%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: wp('5%'),
    marginBottom: hp('1.5%'),
  },
  backButton: {
    width: wp('6%'),
    height: wp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: wp('5.5%'),
    fontWeight: 'bold',
    color: '#1E293B',
    marginLeft: wp('4%'),
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('.2%'),
    gap: wp('6%'),
  },
  tabButton: {
    paddingVertical: hp('1%'),
  },
  activeTabButton: {
    borderBottomWidth: wp('.8%'),
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: wp('4.5%'),
    color: '#9CA3AF',
    fontWeight: '600',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
    // paddingHorizontal: wp('3%'),
  },
  gridContent: {
    paddingBottom: hp('2%'),
  },
  listContainer: {
    backgroundColor: '#000',
  },
});

export default SavedPostsScreen;

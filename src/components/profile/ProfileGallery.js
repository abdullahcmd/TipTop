import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MasonryList from 'react-native-masonry-list';

const images = [
  {
    id: '1',
    source: require('../../assets/images/SamplePostImage.png'),
    dimensions: { width: 600, height: 800 },
  },
  {
    id: '2',
    source: require('../../assets/images/SamplePostImage.png'),
    dimensions: { width: 600, height: 720 },
  },
  {
    id: '3',
    source: require('../../assets/images/SamplePostImage.png'),
    dimensions: { width: 600, height: 400 },
  },
  {
    id: '4',
    source: require('../../assets/images/SamplePostImage.png'),
    dimensions: { width: 600, height: 850 },
  },
  {
    id: '5',
    source: require('../../assets/images/SamplePostImage.png'),
    dimensions: { width: 600, height: 760 },
  },
  {
    id: '6',
    source: require('../../assets/images/SamplePostImage.png'),
    dimensions: { width: 600, height: 690 },
  },
  {
    id: '7',
    source: require('../../assets/images/SamplePostImage.png'),
    dimensions: { width: 600, height: 900 },
  },
  {
    id: '8',
    source: require('../../assets/images/SamplePostImage.png'),
    dimensions: { width: 600, height: 800 },
  },
  {
    id: '9',
    source: require('../../assets/images/SamplePostImage.png'),
    dimensions: { width: 600, height: 700 },
  },
  {
    id: '10',
    source: require('../../assets/images/SamplePostImage.png'),
    dimensions: { width: 600, height: 800 },
  },
];

const ProfileGallery = () => {
  const [activeTab, setActiveTab] = useState('Photos');

  return (
    <View style={styles.container}>
      {/* Tab Header */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Photos' && styles.activeTab]}
          onPress={() => setActiveTab('Photos')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Photos' && styles.activeTabText,
            ]}
          >
            Photos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Posts' && styles.activeTab]}
          onPress={() => setActiveTab('Posts')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Posts' && styles.activeTabText,
            ]}
          >
            Posts
          </Text>
        </TouchableOpacity>
      </View>

      {/* Masonry Grid */}
      {activeTab === 'Photos' ? (
        <MasonryList
          images={images}
          columns={3}
          spacing={3}
          imageContainerStyle={styles.image}
          completeCustomComponent={null}
        />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No posts available.</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileGallery;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -40,
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 16,
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#9333ea',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '700',
  },
  image: {
    borderRadius: 12,
  },
  placeholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
});

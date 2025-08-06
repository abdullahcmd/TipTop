import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MasonryList from 'react-native-masonry-list';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
        {['Photos', 'Posts'].map(tab => {
          const isActive = activeTab === tab;

          return (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.9}
            >
              <View style={styles.tabInner}>
                {isActive ? (
                  <LinearGradient
                    colors={['#d946ef', '#9333ea']}
                    style={styles.activeTabGradient}
                  >
                    <Text style={[styles.tabText, styles.activeTabText]}>
                      {tab}
                    </Text>
                  </LinearGradient>
                ) : (
                  <View style={styles.inactiveTabBackground}>
                    <Text style={styles.tabText}>{tab}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Masonry Grid */}
      {activeTab === 'Photos' ? (
        <MasonryList
          images={images}
          columns={3}
          spacing={wp('1%')}
          imageContainerStyle={styles.image}
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
    paddingHorizontal: wp('4%'),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -hp('5%'),
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: hp('2%'),
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: hp('1.5%'),
  },
  tab: {
    flex: 1,
    height: hp('5%'),
  },
  tabInner: {
    flex: 1,
  },
  activeTabGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  inactiveTabBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: wp('3.5%'),
    color: '#444',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  image: {
    borderRadius: 12,
  },
  placeholder: {
    height: hp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#888',
    fontSize: wp('4%'),
  },
});

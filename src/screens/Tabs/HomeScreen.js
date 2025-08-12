import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import ReelVideoPlayer from '../../components/HomePage/ReelPlayer';

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.912;

const dummyReels = [
  {
    id: '1',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/Big_Buck_Bunny_thumbnail_vlc.png',
    caption: 'Sunset in Bali 🌅',
    location: 'Bali, Indonesia',
    likes: 2.3,
    comments: 122,
    shares: 0.8,
    user: { name: 'Maria Gomez', avatar: 'https://i.pravatar.cc/150?img=4' },
  },
  {
    id: '2',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
    caption: 'Adventure begins!',
    location: 'Iceland',
    likes: 4.2,
    comments: 83,
    shares: 1.1,
    user: { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=10' },
  },
  // Add more...
];

const ReelsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 80 }).current;

  return (
    <View style={styles.rootContainer}>
      <StatusBar barStyle="light-content" />
      <View style={{ height: ITEM_HEIGHT }}>
        <FlatList
          data={dummyReels}
          keyExtractor={item => item.id}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfig}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          ref={flatListRef}
          renderItem={({ item, index }) => (
            <View style={{ height: ITEM_HEIGHT }}>
              {index === currentIndex ? (
                <ReelVideoPlayer reel={item} isVisible={true} />
              ) : (
                <Image
                  source={{ uri: item.thumbnailUrl }}
                  style={styles.thumbnail}
                />
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  thumbnail: {
    height: ITEM_HEIGHT,
    width: '100%',
    resizeMode: 'cover',
  },
});

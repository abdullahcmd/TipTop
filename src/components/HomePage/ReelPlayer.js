import React, { useRef, useState } from 'react';
import { View, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import ReelActions from './ReelAction';
import ReelFooter from './ReelFooter';
import { useNavigation } from '@react-navigation/native';

const ReelVideoPlayer = ({ reel, isVisible }) => {
  const videoRef = useRef(null);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: reel.videoUrl }}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={!isVisible}
        muted={false}
        ignoreSilentSwitch="ignore"
        onLoadStart={() => setIsLoading(true)}
        onBuffer={({ isBuffering }) => setIsLoading(isBuffering)}
        onReadyForDisplay={() => setIsLoading(false)}
        onError={e => {
          console.warn('Video Error:', e);
          setIsLoading(false);
        }}
      />

      {/* Loading Spinner */}
      {isLoading && (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      {/* Overlay UI */}
      <ReelActions
        onPressComments={() => navigation.navigate('Comments')}
        onPressShare={() => navigation.navigate('Feed')}
        profile={reel.user.avatar}
        likes={reel.likes}
        comments={reel.comments}
        shares={reel.shares}
      />
      <ReelFooter
        name={reel.user.name}
        caption={reel.caption}
        location={reel.location}
      />
    </View>
  );
};

export default ReelVideoPlayer;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  loaderWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});

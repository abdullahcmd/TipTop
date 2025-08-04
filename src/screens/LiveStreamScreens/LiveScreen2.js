import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Platform,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import RoundButton from '../../components/button/LiveScreenButtons/ReusableCentreIconButton';
import LiveCommentsSection from '../../components/button/LiveScreenButtons/LiveCommentsSection';
import LiveTopBar from '../../components/button/LiveScreenButtons/LiveTopBar';
import VideoIcon from '../../assets/svgs/VideoIcon.svg';
import MicrophoneIcon from '../../assets/svgs/MicrophoneIcon.svg';
import CameraIcon from '../../assets/svgs/Camera.svg';

const LiveStreamScreen = () => {
  const comments = [
    {
      id: '1',
      username: 'jessi_joshua',
      avatar: 'https://i.pravatar.cc/150?img=5',
      message: 'Joined the stream',
      type: 'message',
    },
    {
      id: '2',
      username: 'jessi_joshua',
      avatar: 'https://i.pravatar.cc/150?img=5',
      message: 'requesting to join the stream.',
      type: 'join-request',
    },
  ];

  const cameraRef = useRef(null);
  const device = useCameraDevice('front');
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  if (!hasPermission)
    return (
      <SafeAreaView style={styles.loading}>
        <Text style={styles.loadingText}>Loading Camera...</Text>
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      {/* Replace with live camera for real device testing */}
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
      {/* <ImageBackground
        source={require('../../assets/images/LiveScreen.png')}
        style={StyleSheet.absoluteFill}
        imageStyle={{ borderRadius: 20 }}
      /> */}

      {/* Overlay UI */}
      <View style={StyleSheet.absoluteFill}>
        <LiveTopBar />

        <View style={styles.flexSpacer} />

        <LiveCommentsSection
          comments={comments}
          onSendMessage={msg => console.log('Message:', msg)}
          onAccept={user => console.log('Accepted:', user)}
          onRefuse={user => console.log('Refused:', user)}
        />

        <View style={styles.buttonRow}>
          <RoundButton size={60}>
            <VideoIcon width={30} height={30} />
          </RoundButton>
          <RoundButton>
            <MicrophoneIcon width={30} height={30} />
          </RoundButton>
          <RoundButton>
            <CameraIcon />
          </RoundButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LiveStreamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loading: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
  },
  flexSpacer: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: Platform.OS === 'ios' ? 32 : 24,
    alignItems: 'center',
  },
});

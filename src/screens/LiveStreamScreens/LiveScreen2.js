import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import RoundButton from '../../components/LiveScreenButtons/ReusableCentreIconButton';
import LiveCommentsSection from '../../components/LiveScreenButtons/LiveCommentsSection';
import LiveTopBar from '../../components/LiveScreenButtons/LiveTopBar';

import VideoIcon from '../../assets/svgs/VideoIcon.svg';
import MicrophoneIcon from '../../assets/svgs/MicrophoneIcon.svg';
import CameraIcon from '../../assets/svgs/Camera.svg';
import { useNavigation } from '@react-navigation/native';

const LiveStreamScreen = () => {
  const navigation = useNavigation();
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
  const device = useCameraDevice('back');
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
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />

      <View style={StyleSheet.absoluteFill}>
        <LiveTopBar />

        <View style={styles.flexSpacer} />

        <LiveCommentsSection
          comments={comments}
          onSendMessage={msg => console.log('Message:', msg)}
          onAccept={user => {
            navigation.navigate('LiveMatch')
            console.log('Accepted:', user)
          }

          }
          onRefuse={user => console.log('Refused:', user)}
        />

        <View style={styles.buttonRow}>
          <RoundButton size={wp('10%')}>
            <VideoIcon width={wp('4%')} height={wp('4%')} />
          </RoundButton>
          <RoundButton size={wp('10%')}>
            <MicrophoneIcon width={wp('4%')} height={wp('4%')} />
          </RoundButton>
          <RoundButton size={wp('10%')}>
            <CameraIcon width={wp('4%')} height={wp('4%')} />
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
    fontSize: wp('4%'),
  },
  flexSpacer: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: Platform.OS === 'ios' ? hp('4%') : hp('2.5%'),
    alignItems: 'center',
  },
});

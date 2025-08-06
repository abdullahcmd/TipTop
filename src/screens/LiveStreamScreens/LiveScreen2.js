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
import RoundButton from '../../components/LiveStreamComponents/ReusableCentreIconButton';
import LiveCommentsSection from '../../components/LiveStreamComponents/LiveCommentsSection';
import LiveTopBar from '../../components/LiveStreamComponents/LiveTopBar';
import LiveBottomSheet from '../../components/LiveStreamComponents/BottomSheet/BottomSheet';
import VideoIcon from '../../assets/svgs/VideoIcon.svg';
import MicrophoneIcon from '../../assets/svgs/MicrophoneIcon.svg';
import CameraIcon from '../../assets/svgs/Camera.svg';
import { useNavigation } from '@react-navigation/native';

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
  const bottomSheetRef = useRef(null);
  const navigation = useNavigation();
  const device = useCameraDevice('front');
  const { hasPermission, requestPermission } = useCameraPermission();

  // useEffect(() => {
  //   if (!hasPermission) {
  //     requestPermission();
  //   }
  // }, [hasPermission]);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  // if (!hasPermission)
  //   return (
  //     <SafeAreaView style={styles.loading}>
  //       <Text style={styles.loadingText}>Loading Camera...</Text>
  //     </SafeAreaView>
  //   );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      /> */}

      <View style={StyleSheet.absoluteFill}>
        <LiveTopBar
          stop={() => {
            navigation.replace('LiveStreamSummary');
          }}
          viewerCount="23K"
          coins="823"
          participants={3}
          onPressParticipants={openBottomSheet}
        />

        <View style={styles.flexSpacer} />

        <LiveCommentsSection
          comments={comments}
          onSendMessage={msg => console.log('Message:', msg)}
          onAccept={user => console.log('Accepted:', user)}
          onRefuse={user => console.log('Refused:', user)}
        />

        <View style={styles.buttonRow}>
          <RoundButton size={wp('15%')}>
            <VideoIcon width={wp('7%')} height={wp('7%')} />
          </RoundButton>
          <RoundButton size={wp('15%')}>
            <MicrophoneIcon width={wp('7%')} height={wp('7%')} />
          </RoundButton>
          <RoundButton size={wp('15%')}>
            <CameraIcon width={wp('7%')} height={wp('7%')} />
          </RoundButton>
        </View>

        {/* Custom Bottom Sheet with ref */}
        <LiveBottomSheet ref={bottomSheetRef} />
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

// import { StyleSheet, View, Text, Platform } from 'react-native';
// import {
//   Camera,
//   useCameraDevices,
//   useCameraPermission,
// } from 'react-native-vision-camera';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// import RoundButton from '../../components/LiveScreenButtons/ReusableCentreIconButton';
// import LiveCommentsSection from '../../components/LiveScreenButtons/LiveCommentsSection';
// import LiveTopBar from '../../components/LiveScreenButtons/LiveTopBar';

// import VideoIcon from '../../assets/svgs/VideoIcon.svg';
// import MicrophoneIcon from '../../assets/svgs/MicrophoneIcon.svg';
// import CameraIcon from '../../assets/svgs/Camera.svg';

// const LiveStreamScreen = () => {
//   const [videoEnabled, setVideoEnabled] = useState(true);
//   const [micMuted, setMicMuted] = useState(false);
//   const [cameraType, setCameraType] = useState('front');
//   const [permissionGranted, setPermissionGranted] = useState(false);

//   const { devices, isLoading: devicesLoading } = useCameraDevices();
//   const device =
//     devices?.[cameraType] || devices?.back || devices?.front || null; // Safe fallback

//   const { hasPermission, requestPermission } = useCameraPermission();
//   const cameraRef = useRef(null);

//   const comments = [
//     {
//       id: '1',
//       username: 'jessi_joshua',
//       avatar: 'https://i.pravatar.cc/150?img=5',
//       message: 'Joined the stream',
//       type: 'message',
//     },
//     {
//       id: '2',
//       username: 'jessi_joshua',
//       avatar: 'https://i.pravatar.cc/150?img=5',
//       message: 'requesting to join the stream.',
//       type: 'join-request',
//     },
//   ];

//   useEffect(() => {
//     const getPermission = async () => {
//       const granted = await requestPermission();
//       setPermissionGranted(granted);
//     };
//     getPermission();
//   }, []);

//   const toggleVideo = () => setVideoEnabled(prev => !prev);
//   const toggleMic = () => setMicMuted(prev => !prev);
//   const switchCamera = () =>
//     setCameraType(prev => (prev === 'front' ? 'back' : 'front'));

//   if (!permissionGranted || devicesLoading || !device) {
//     return (
//       <SafeAreaView style={styles.loading}>
//         <Text style={styles.loadingText}>Loading Camera or Not Available</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       {videoEnabled ? (
//         <Camera
//           ref={cameraRef}
//           style={StyleSheet.absoluteFill}
//           device={device}
//           isActive={true}
//         />
//       ) : (
//         <View style={styles.pausedOverlay}>
//           <Text style={styles.loadingText}>Camera Paused</Text>
//         </View>
//       )}

//       {/* UI Overlay */}
//       <View style={StyleSheet.absoluteFill}>
//         <LiveTopBar />
//         <View style={styles.flexSpacer} />

//         <LiveCommentsSection
//           comments={comments}
//           onSendMessage={msg => console.log('Message:', msg)}
//           onAccept={user => console.log('Accepted:', user)}
//           onRefuse={user => console.log('Refused:', user)}
//         />

//         <View style={styles.buttonRow}>
//           <RoundButton
//             onPress={toggleVideo}
//             style={
//               !videoEnabled && {
//                 backgroundColor: '#EF4444',
//                 position: 'relative',
//               }
//             }
//           >
//             <VideoIcon width={wp('7%')} height={wp('7%')} />
//             {!videoEnabled && <View style={styles.strikeLine} />}
//           </RoundButton>

//           <RoundButton onPress={toggleMic}>
//             <MicrophoneIcon
//               width={wp('7%')}
//               height={wp('7%')}
//               fill={micMuted ? '#EF4444' : '#fff'}
//             />
//           </RoundButton>

//           <RoundButton onPress={switchCamera}>
//             <CameraIcon width={wp('7%')} height={wp('7%')} />
//           </RoundButton>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default LiveStreamScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   loading: {
//     flex: 1,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     color: '#fff',
//     fontSize: wp('4%'),
//   },
//   flexSpacer: {
//     flex: 1,
//   },
//   pausedOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     paddingBottom: Platform.OS === 'ios' ? hp('4%') : hp('2.5%'),
//     alignItems: 'center',
//   },
//   strikeLine: {
//     position: 'absolute',
//     width: '80%',
//     height: 2,
//     backgroundColor: '#fff',
//     transform: [{ rotate: '-45deg' }],
//   },
// });

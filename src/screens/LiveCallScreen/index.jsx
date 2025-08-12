import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
export default function LiveCallScreen() {
  const navigation = useNavigation();
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [front, setFront] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);

  const device = useCameraDevice(!front ? 'front' : 'back');
  const camRef = useRef(null);

  useEffect(() => {
    (async () => {
      const cam = await Camera.requestCameraPermission();
      const mic = await Camera.requestMicrophonePermission();
      setHasPermission(cam === 'granted' && mic === 'granted');
    })();
  }, []);

  const onHangup = () => {
    // TODO: end call / leave room
    if (navigation?.goBack) navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content"  backgroundColor={'transparent'}/>
      <View style={styles.card}>

        {/* Remote stream (placeholder image for now) */}
        <ImageBackground
          source={{
            uri:
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=60',
          }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        >
          {/* top-left back */}
          <Pressable style={[styles.topBtn, { left: 12,top:40 }]} onPress={() => navigation?.goBack?.()}>
            <Ionicons name="chevron-back" size={22} color="#fff" />
          </Pressable>

          {/* top-right menu */}
          <Pressable style={[styles.topBtn, { right: 12,top:40  }]} onPress={() => { }}>
            <Ionicons name="ellipsis-horizontal" size={22} color="#fff" />
          </Pressable>

          {/* Local PIP */}
          <View style={styles.pipWrap}>
            <View style={styles.pipShadow} />
            <View style={styles.pip}>
              {videoOn && hasPermission && device ? (
                <Camera
                  ref={camRef}
                  style={StyleSheet.absoluteFill}
                  device={device}
                  isActive={true}
                />
              ) : (
                <View style={styles.pipOff}>
                  <Ionicons name="videocam-off" size={26} color="#fff" />
                </View>
              )}
            </View>
          </View>

          {/* bottom controls */}
          <View style={styles.controls}>
            <RowButton
              icon={videoOn ? 'videocam' : 'videocam-off'}
              onPress={() => setVideoOn(v => !v)}
            />
            <RowButton
              icon={micOn ? 'mic' : 'mic-off'}
              onPress={() => setMicOn(m => !m)}
            />
            <RowButton
              icon="camera-reverse"
              onPress={() => setFront(f => !f)}
            />
            <Pressable style={styles.endBtn} onPress={onHangup}>
              <Ionicons name="call" size={22} color="#fff" />
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

function RowButton({ icon, onPress }) {
  return (
    <Pressable style={styles.circleBtn} onPress={onPress}>
      <Ionicons name={icon} size={22} color="#fff" />
    </Pressable>
  );
}



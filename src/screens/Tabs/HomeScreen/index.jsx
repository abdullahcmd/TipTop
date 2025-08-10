import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
const { height } = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  const player = useRef(null);
  const [paused, setPaused] = useState(false);

  const togglePlay = () => setPaused((p) => !p);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Video */}
      <TouchableOpacity style={styles.playerWrap} activeOpacity={0.9} onPress={togglePlay}>
        <Video
          ref={player}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4', // demo beach video
          }}
          style={StyleSheet.absoluteFill}
          posterResizeMode="cover"
          resizeMode="cover"
          repeat
          paused={paused}
          muted={false}
          playInBackground={false}
          playWhenInactive={false}
          ignoreSilentSwitch="obey"
        />
        {/* top gradient for readability */}
        <LinearGradient
          colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0)"]}
          style={[styles.gradTop, { height: height * 0.18 }]}
          pointerEvents="none"
        />
        {/* bottom gradient for text legibility */}
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.85)"]}
          style={[styles.gradBottom, { height: height * 0.28 }]}
          pointerEvents="none"
        />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>DISCOVER <Text style={{ fontSize: 14 }}>▼</Text></Text>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="ellipsis-horizontal-circle" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Right action rail */}
        <View style={styles.rail}>
          <TouchableOpacity style={styles.railBtn}>
            <Ionicons name="heart" size={26} color="#ff4aa5" />
            <Text style={styles.railCount}>1.5k</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.railBtn}>
            <Ionicons name="chatbubble-ellipses" size={26} color="#fff" />
            <Text style={styles.railCount}>89</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.railBtn}>
            <Feather name="send" size={26} color="#fff" />
            <Text style={styles.railCount}>14k</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.avatarWrap} onPress={()=> {
            navigation.navigate('UserScreen')
          }}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80' }}
              style={styles.avatar}
            />
            <View style={styles.followPlus}>
              <Ionicons name="add" size={12} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Floating create button */}
        {/* <TouchableOpacity style={styles.fab}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity> */}

        {/* Bottom caption area */}
        <View style={styles.captionBlock}>
          <Text style={styles.user}>Alena Şaris</Text>
          <Text numberOfLines={2} style={styles.caption}>
            Chasing sunsets in Santorini 🌅💙 This view never gets old! #TravelDiaries #ParadiseFound
          </Text>
          <View style={styles.locationRow}>
            <MaterialCommunityIcons name="map-marker" size={16} color="#7bc2ff" />
            <Text style={styles.location}>Santorini, the Aegean Sea</Text>
          </View>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
}


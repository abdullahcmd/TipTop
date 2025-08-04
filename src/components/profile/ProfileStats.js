import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

const ProfileHeader = () => {
  return (
    <LinearGradient
      colors={['#d946ef', '#6366f1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={{ paddingTop: 10 }}>
        {/* Top Navigation */}
        <View style={styles.navRow}>
          <TouchableOpacity>
            <Icon name="arrow-left" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="more-horizontal" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Profile Info Row */}
        <View style={styles.profileRow}>
          <Image
            source={require('../../assets/images/ProfileImage.png')} // replace with your path
            style={styles.avatar}
          />
          <View style={styles.infoBlock}>
            <Text style={styles.name}>Rose Madison</Text>
            <Text style={styles.title}>Fashion Model</Text>
            <View style={styles.locationRow}>
              <Icon name="map-pin" size={14} color="white" />
              <Text style={styles.location}>London, United Kingdom</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statBlock}>
            <Text style={styles.statValue}>736</Text>
            <Text style={styles.statLabel}>Friends</Text>
          </View>
          <View
            style={{
              width: 2,
              height: '130%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              marginRight: -30,
            }}
          />
          <View style={styles.statBlock}>
            <Text style={styles.statValue}>92</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View
            style={{
              width: 2,
              height: '130%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              marginRight: -30,
            }}
          />
          <View style={styles.statBlock}>
            <Text style={styles.statValue}>34</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '40%',
  },
  navRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 36,
    marginRight: 16,
  },
  infoBlock: {
    flex: 1,
    gap: 3,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    color: 'white',
    fontSize: 15,
    marginTop: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  location: {
    color: 'white',
    marginLeft: 4,
    fontSize: 14,
  },
  followBtn: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  followText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    gap: 45,
    marginTop: 20,
    paddingTop: 12,
    paddingLeft: 20,
    // width: '80%',
    // borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  statBlock: {
    // alignItems: 'c',
  },
  statValue: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    color: '#eee',
    fontSize: 12,
    marginTop: 2,
  },
});

export default ProfileHeader;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const ProfileHeader = () => {

  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#d946ef', '#6366f1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={{ paddingTop: hp('1%') }}>
        {/* Top Navigation */}
        <View style={styles.navRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={wp('5.2%')} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
            <Icon name="more-horizontal" size={wp('5.2%')} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Profile Info Row */}
        <View style={styles.profileRow}>
          <Image
            source={require('../../assets/images/ProfileImage.png')}
            style={styles.avatar}
          />
          <View style={styles.infoBlock}>
            <Text style={styles.name}>Rose Madison</Text>
            <Text style={styles.title}>Fashion Model</Text>
            <View style={styles.locationRow}>
              <Icon name="map-pin" size={wp('3.2%')} color="white" />
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
          <View style={styles.divider} />
          <View style={styles.statBlock}>
            <Text style={styles.statValue}>92</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.divider} />
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
    height: hp('40%'),
    paddingTop: Platform.OS === 'android' ? hp('3.5%') : 0,
  },
  navRow: {
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileRow: {
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    marginTop: hp('2.5%'),
  },
  avatar: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: 36,
    marginRight: wp('4%'),
  },
  infoBlock: {
    flex: 1,
    gap: hp('0.5%'),
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('4.5%'),
  },
  title: {
    color: 'white',
    fontSize: wp('3.8%'),
    marginTop: hp('0.2%'),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.2%'),
  },
  location: {
    color: 'white',
    marginLeft: wp('1.2%'),
    fontSize: wp('3.5%'),
  },
  followBtn: {
    backgroundColor: '#fff',
    paddingVertical: hp('0.7%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 4,
  },
  followText: {
    color: '#000',
    fontSize: wp('3.5%'),
    fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row',
    gap: wp('10%'),
    marginTop: hp('2.5%'),
    paddingTop: hp('1.5%'),
    paddingLeft: wp('5%'),
    borderTopColor: 'rgba(255,255,255,0.2)',
    // borderTopWidth: 1,
  },
  statBlock: {},
  statValue: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  statLabel: {
    color: '#eee',
    fontSize: wp('3%'),
    marginTop: hp('0.2%'),
  },
  divider: {
    width: 2,
    height: '130%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginRight: wp('-8%'),
  },
});

export default ProfileHeader;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import EyeIcon from '../../assets/svgs/EyeIcon.svg';
import DollarIcon from '../../assets/svgs/DollarIcon.svg';
import PeopleIcon from '../../assets/svgs/People.svg';

const LiveTopBar = ({
  viewerCount,
  coins,
  participants,
  onPressParticipants,
  stop,
}) => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.stopButton} onPress={stop}>
          <Text style={styles.stopText}>Stop</Text>
        </TouchableOpacity>

        <View style={styles.statusGroup}>
          <View style={styles.statusBox}>
            <EyeIcon />
            <Text style={styles.statusText}>{viewerCount}</Text>
          </View>
          <View style={styles.statusBox}>
            <DollarIcon />
            <Text style={styles.statusText}>{coins}</Text>
          </View>
          <TouchableOpacity
            style={styles.statusBox}
            onPress={onPressParticipants}
          >
            <PeopleIcon />
            <Text style={styles.statusText}>{participants}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LiveTopBar;

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: wp('4%'),
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: wp('1.5%'),
  },
  stopButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('1.8%'),
  },
  stopText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('3.5%'),
  },
  statusGroup: {
    flexDirection: 'row',
    gap: wp('2%'),
    alignItems: 'center',
  },
  statusBox: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('1.8%'),
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    marginLeft: wp('1.5%'),
    fontSize: wp('3.3%'),
  },
});

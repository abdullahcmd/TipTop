import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EyeIcon from '../../../assets/svgs/EyeIcon.svg';
import DollarIcon from '../../../assets/svgs/DollarIcon';
import PeopleIcon from '../../../assets/svgs/People.svg';
const LiveTopBar = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.stopButton}>
          <Text style={styles.stopText}>Stop</Text>
        </TouchableOpacity>

        <View style={styles.statusGroup}>
          <View style={styles.statusBox}>
            <EyeIcon />
            <Text style={styles.statusText}>23K</Text>
          </View>
          <View style={styles.statusBox}>
            <DollarIcon />
            <Text style={styles.statusText}>823</Text>
          </View>
          <View style={styles.statusBox}>
            {/* 👥 People icon */}
            <PeopleIcon />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LiveTopBar;

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  stopButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  stopText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  statusGroup: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  statusBox: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    marginLeft: 6,
  },
});

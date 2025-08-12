import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderButtons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.liveBtn}>
        <Text style={styles.liveIcon}>📡</Text>
        <Text style={styles.liveText}>LIVESTREAMS</Text>
      </View>
      <View style={styles.goLiveBtn}>
        <Text style={styles.dotIcon}>⏺</Text>
        <Text style={styles.goText}>Go Live</Text>
      </View>
    </View>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
  },
  liveBtn: {
    backgroundColor: '#FF4D4D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveIcon: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  liveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  goLiveBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dotIcon: {
    marginRight: 8,
  },
  goText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

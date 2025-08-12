import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Location from '../../assets/svgs/LocationHome.svg';

const ReelFooter = ({ name, caption, location }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.caption}>{caption}</Text>
    <View style={styles.locationRow}>
      <Location width={18} height={18} />
      <Text style={styles.location}>{location}</Text>
    </View>
  </View>
);

export default ReelFooter;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 14,
    paddingRight: 80,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  caption: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  location: {
    color: '#ccc',
    fontSize: 13,
  },
});

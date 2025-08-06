import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryRow = ({ label, value, subtext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      {subtext && <Text style={styles.sub}>{subtext}</Text>}
      <View style={styles.divider} />
    </View>
  );
};

export default SummaryRow;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: '#BEBEBE',
  },
  value: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  sub: {
    textAlign: 'right',
    color: '#7A7A7A',
    fontSize: 14,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginTop: 10,
  },
});

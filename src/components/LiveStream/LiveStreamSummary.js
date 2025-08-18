import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    marginBottom: hp('1.5%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: wp('4%'),
    color: '#BEBEBE',
  },
  value: {
    fontSize: wp('4%'),
    color: '#fff',
    fontWeight: 'bold',
  },
  sub: {
    textAlign: 'right',
    color: '#7A7A7A',
    fontSize: wp('3.4%'),
    marginTop: hp('0.3%'),
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginTop: hp('1.2%'),
  },
});

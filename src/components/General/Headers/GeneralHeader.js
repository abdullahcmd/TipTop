import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { wp, hp } from '../../../utils/helpers/responsive';

const Header = ({
  showBack = true,
  title = 'Scan QR Code',
  rightElement = null,
  styleText,
  color = '#000',
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {showBack ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.backButton]}
        >
          <Icon name="arrow-back" size={wp('6%')} color={color} />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButton} />
      )}

      <Text style={[styles.headerTitle, styleText]}>{title}</Text>

      <View style={styles.rightElementWrapper}>{rightElement}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
  },
  backButton: {
    padding: wp('2%'),
    width: wp('10%'),
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: wp('5.5%'),
    color: '#000',
    fontWeight: '800',
    textAlign: 'center',
    flex: 1,
  },
  rightElementWrapper: {
    width: wp('10%'),
    alignItems: 'flex-end',
  },
});

export default Header;

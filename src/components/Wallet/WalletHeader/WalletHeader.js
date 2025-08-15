import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../General/Headers/GeneralHeader';
import Icon from 'react-native-vector-icons/Entypo';

// Coin Wallet Header
export const CoinWalletHeader = ({ balance, collected, purchased }) => (
  <LinearGradient
    colors={[
      'rgba(246, 29, 128, 1)',
      'rgba(135, 116, 255, 1)',
      'rgba(52, 61, 255, 1)',
    ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.headerContainer}
  >
    <Header
      styleText={{ color: 'white' }}
      title="CoinWallet"
      color={'white'}
      rightElement={
        <TouchableOpacity>
          <Icon size={wp('5%')} color="white" name={'dots-three-horizontal'} />
        </TouchableOpacity>
      }
    />
    <View>
      <Text style={styles.balanceText}>{balance}k</Text>
      <Text style={[styles.walletInfoText, { textAlign: 'center' }]}>
        {' '}
        Balance
      </Text>
    </View>
    <View
      style={[
        styles.walletInfoContainer,
        {
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: wp(5),
          marginTop: hp(2),
        },
      ]}
    >
      <View style={{ alignItems: 'center' }}>
        <Text
          style={[
            styles.walletInfoText,
            { color: 'white', fontWeight: '700', fontSize: wp(5) },
          ]}
        >
          {collected}
        </Text>
        <Text style={styles.walletInfoText}>Collected</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={[
            styles.walletInfoText,
            { color: 'white', fontWeight: '700', fontSize: wp(5) },
          ]}
        >
          {purchased}
        </Text>
        <Text style={styles.walletInfoText}>Purchased</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={[
            styles.walletInfoText,
            { color: 'white', fontWeight: '700', fontSize: wp(5) },
          ]}
        >
          {purchased}
        </Text>
        <Text style={styles.walletInfoText}>Purchased</Text>
      </View>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  headerContainer: {
    borderRadius: 30,
    // marginHorizontal: wp(2),
    height: hp(28),
    marginBottom: hp('2%'),
    alignItems: 'center',
  },
  balanceText: {
    fontSize: wp(10),
    fontWeight: 'bold',
    color: '#fff',
  },
  walletInfoContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp(3),
    // paddingBottom: Platform.OS === 'ios' ? hp('1%') : 0, // Use paddingBottom instead of bottom for consistent spacing
  },
  walletInfoText: {
    color: '#fff',
    marginRight: wp('2%'),
  },
  coinShopTitle: {
    fontSize: wp(3),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  coinShopDescription: {
    marginBottom: hp('2%'),
  },
  coinItemContainer: {
    marginVertical: hp('1%'),
  },
  coinItemButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    paddingVertical: hp('2%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  coinItemText: {
    fontSize: wp(2),
    fontWeight: 'bold',
  },
  coinPriceText: {
    fontSize: wp(2),
    color: '#ff4081',
  },
  subscribeBtn: {
    backgroundColor: '#2C0F0F',
    paddingVertical: hp('2.5%'),
    width: wp('85%'),
    borderRadius: wp('2%'),
    marginTop: hp('3%'),
  },
  subscribeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
});

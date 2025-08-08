import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const tabs = ['Requests', 'Audience', 'Invited', 'Co-hosts'];

const BottomSheetTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabRow}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}
          activeOpacity={0.8}
        >
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeText]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomSheetTabs;

const styles = StyleSheet.create({
  tabRow: {
    flexDirection: 'row',
    paddingVertical: hp('0.7%'),
    paddingHorizontal: wp('1%'),
    backgroundColor: '#f3f4f6',
    borderRadius: wp('3.2%'),
    marginTop: hp('1%'),
  },
  tab: {
    flex: 1,
    paddingVertical: hp('1.3%'),
    alignItems: 'center',
    borderRadius: wp('3.2%'),
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontWeight: '500',
    color: '#555',
    fontSize: wp('3.6%'),
  },
  activeText: {
    fontWeight: '700',
    color: '#111',
  },
});

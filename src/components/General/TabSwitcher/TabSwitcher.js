import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TabSwitcher = ({ tabs = ['My code', 'Scan code'], onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = index => {
    setActiveTab(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => handleTabPress(index)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === index ? styles.activeText : styles.inactiveText,
            ]}
          >
            {tab}
          </Text>
          {activeTab === index && (
            <LinearGradient
              colors={['#ff00ff', '#0000ff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.activeLine}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingHorizontal: wp(2),
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: hp(1.5), // responsive vertical spacing
  },
  tabText: {
    fontSize: wp(4), // responsive font
    fontWeight: '500',
  },
  activeText: {
    color: '#000',
  },
  inactiveText: {
    color: '#999',
  },
  activeLine: {
    marginTop: hp(0.5),
    height: hp(0.3),
    width: wp(50),
    borderRadius: wp(1),
  },
});

export default TabSwitcher;

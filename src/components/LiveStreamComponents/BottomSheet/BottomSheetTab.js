import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const tabs = ['Requests', 'Audience', 'Invited', 'Co-hosts'];

const BottomSheetTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabRow}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}
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
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    marginTop: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  tabText: {
    fontWeight: '500',
    color: '#555',
  },
  activeText: {
    fontWeight: '700',
    color: '#111',
  },
});

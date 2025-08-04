// components/CustomTabBar.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeIcon from '../../assets/svgs/HomeSimple.svg';
import HomeIconFilled from '../../assets/svgs/Home.svg';
import SearchIcon from '../../assets/svgs/SearchSimple.svg';
import SearchIconFilled from '../../assets/svgs/Search.svg';
import AddBoxIcon from '../../assets/svgs/BoxSimple.svg';
import AddBoxIconFilled from '../../assets/svgs/Box.svg';
import LiveIcon from '../../assets/svgs/LiveStreamSimple.svg';
import LiveIconFilled from '../../assets/svgs/LiveStream.svg';
import ProfileImage from '../../assets/svgs/ProfileImage.svg';
import Icon from 'react-native-vector-icons/Feather';
const { width } = Dimensions.get('window');

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  const getIcon = (name, isFocused) => {
    const size = 26; // Uniform size for both versions

    switch (name) {
      case 'Home':
        return isFocused ? (
          <HomeIconFilled width={size} height={size} />
        ) : (
          <HomeIcon width={size} height={size} />
        );
      case 'Search':
        return isFocused ? (
          <SearchIconFilled width={size} height={size} />
        ) : (
          <SearchIcon width={size} height={size} />
        );
      case 'LiveStream':
        return isFocused ? (
          <LiveIconFilled width={size} height={size} />
        ) : (
          <LiveIcon width={size} height={size} />
        );
      case 'AddBox':
        return isFocused ? (
          <AddBoxIconFilled width={size} height={size} />
        ) : (
          <AddBoxIcon width={size} height={size} />
        );
      default:
        return null;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Special Add button in center
        if (route.name === 'Add') {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.addButton}
            >
              <View style={styles.plusCircle}>
                {/* You can replace this with a custom AddIcon if needed */}
                <Icon size={25} color={'white'} name="plus" />
              </View>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            onPress={onPress}
            style={styles.tab}
          >
            {route.name === 'Profile' ? (
              <ProfileImage />
            ) : (
              <View style={styles.iconWrapper}>
                {isFocused && <View style={styles.underline} />}
                {getIcon(route.name, isFocused)}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default CustomTabBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingTop: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  underline: {
    height: 3,
    backgroundColor: '#C86CFA',
    width: 30,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginBottom: 7,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusCircle: {
    width: 45,
    height: 45,
    backgroundColor: '#C86CFA',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

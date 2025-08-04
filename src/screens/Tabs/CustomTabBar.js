// components/CustomTabBar.js
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileImage from '../../assets/svgs/ProfileImage.svg';
const { width } = Dimensions.get('window');

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

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

        // Special button in center
        if (route.name === 'Add') {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.addButton}
            >
              <View style={styles.plusCircle}>
                <Icon name="plus" size={32} color="#fff" />
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
                <Icon
                  name={
                    route.name === 'Home'
                      ? 'home'
                      : route.name === 'Search'
                      ? 'search'
                      : 'box'
                  }
                  size={27}
                  color={isFocused ? '#C86CFA' : '#fff'}
                />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',

    paddingTop: 10,
    paddingHorizontal: 20,
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
    height: 2,
    backgroundColor: '#C86CFA',
    width: 30,
    borderRadius: 2,
    marginBottom: 7,
  },
  addButton: {
    //top: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#C86CFA',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
});

export default CustomTabBar;

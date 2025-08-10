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
import RequestsImage from '../../assets/svgs/requests.svg';
import LiveImage from '../../assets/svgs/livetv.svg';
import GridsImage from '../../assets/svgs/grids.svg';
import AcountsImage from '../../assets/svgs/acounts.svg';
import Icon from 'react-native-vector-icons/Feather';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  const getIcon = (name, isFocused) => {
    const size = wp('10%');
    switch (name) {
      case 'Home':
        return isFocused ? (
          <HomeIconFilled width={wp('6%')} height={wp('6%')} />
        ) : (
          <HomeIcon width={wp('6%')} height={wp('6%')} />
        );
      case 'Messages':
        return isFocused ? (
          <GridsImage width={size} height={size} />
        ) : (
          <GridsImage width={size} height={size} />
        );
      case 'LiveStream':
        return isFocused ? (
          <LiveImage width={size} height={size} />
        ) : (
          <LiveImage width={size} height={size} />
        );
      case 'Profile':
        return isFocused ? (
          <AcountsImage width={size} height={size} />
        ) : (
          <AcountsImage width={size} height={size} />
        );
      case 'AddBox':
        return isFocused ? (
          <RequestsImage width={size} height={size} />
        ) : (
          <RequestsImage width={size} height={size} />
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
          paddingBottom: insets.bottom > 0 ? insets.bottom : hp('1.5%'),
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

        // Center "Add" Button
        // if (route.name === 'Add') {
        //   return (
        //     <TouchableOpacity
        //       key={route.key}
        //       onPress={onPress}
        //       style={styles.addButton}
        //     >
        //       <View style={styles.plusCircle}>
        //         <Icon size={wp('5.5%')} color={'white'} name="plus" />
        //       </View>
        //     </TouchableOpacity>
        //   );
        // }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            onPress={onPress}
            style={styles.tab}
          >
       
              <View style={styles.iconWrapper}>
                {isFocused && <View style={styles.underline} />}
                {getIcon(route.name, isFocused)}
              </View>
        
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
    paddingTop: hp('1.2%'),
    paddingHorizontal: wp('5%'),
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
    height: hp('0.4%'),
    backgroundColor: '#C86CFA',
    width: wp('8%'),
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginBottom: hp('0.7%'),
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusCircle: {
    width: wp('12%'),
    height: wp('12%'),
    backgroundColor: '#C86CFA',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

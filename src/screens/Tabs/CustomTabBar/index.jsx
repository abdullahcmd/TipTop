import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeIcon from '../../../assets/svgs/HomeSimple.svg';
import HomeIconFilled from '../../../assets/svgs/Home.svg';
import RequestsImage from '../../../assets/svgs/requests.svg';
import LiveImage from '../../../assets/svgs/livetv.svg';
import GridsImage from '../../../assets/svgs/grids.svg';
import AcountsImage from '../../../assets/svgs/acounts.svg';
import styles from './style'
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



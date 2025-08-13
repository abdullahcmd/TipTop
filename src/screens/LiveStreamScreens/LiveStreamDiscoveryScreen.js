import React from 'react';
import { View, StyleSheet, FlatList, Platform } from 'react-native';

import HeaderButtons from '../../components/LiveStreamComponents/Header';
import StreamCard from '../../components/LiveStreamComponents/StreamCard';
import SearchBar from '../../components/LiveStreamComponents/SearchBar';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import AppSafeAreaView from '../../components/General/SafeAreaView/SafeAreaView';
import { hp, wp } from '../../utils/helpers/responsive';
import { useNavigation } from '@react-navigation/native';

const LiveDiscoveryScreen = () => {
  const navigation = useNavigation();
  // Sample data for the StreamCards
  const data = [
    {
      id: '1',
      type: 'solo',
      gradientColors: ['#4D3A8A', '#2C2C54'],
      avatar: require('../../assets/images/ProfileImage.png'),
      username: 'roxy_thomas',
      viewers: 253,
      description:
        'Showing my new hot outfits by wearing them, come on ! 💅🏽🔥🔥🔥',
    },
    {
      id: '2',
      type: 'battle',
      gradientColors: ['#243C32', '#16211E'],
      avatarLeft: require('../../assets/images/ProfileImage.png'),
      avatarRight: require('../../assets/images/ProfileImage.png'),
      username: 'roxy_thomas',
      viewers: 253,
      description:
        'Hello Guys! please come and help to win the battle, i am fighting 🔥🔥',
    },
    {
      id: '3',
      type: 'group',
      gradientColors: ['#4F2F21', '#201814'],
      avatars: [
        require('../../assets/images/ProfileImage.png'),
        require('../../assets/images/ProfileImage.png'),
        require('../../assets/images/ProfileImage.png'),
      ],
      username: 'roxy_thomas',
      viewers: 253,
      description:
        'Crazy gymnastics live being performed by 3 of us at united stadium 💪',
    },
    {
      id: '4',
      type: 'group',
      gradientColors: ['#6B523B', '#2E241B'],
      avatars: [
        require('../../assets/images/ProfileImage.png'),
        require('../../assets/images/ProfileImage.png'),
        require('../../assets/images/ProfileImage.png'),
      ],
      username: 'roxy_thomas',
      viewers: 253,
      description:
        'Let’s discuss about summer outfits I wore to my Thailand trip 👙👙',
    },
    {
      id: '5',
      type: 'solo',
      gradientColors: ['#4D3A8A', '#2C2C54'],
      avatar: require('../../assets/images/ProfileImage.png'),
      username: 'roxy_thomas',
      viewers: 253,
      description:
        'Showing my new hot outfits by wearing them, come on ! 💅🏽🔥🔥🔥',
    },
    {
      id: '6',
      type: 'battle',
      gradientColors: ['#243C32', '#16211E'],
      avatarLeft: require('../../assets/images/ProfileImage.png'),
      avatarRight: require('../../assets/images/ProfileImage.png'),
      username: 'roxy_thomas',
      viewers: 253,
      description:
        'Hello Guys! please come and help to win the battle, i am fighting 🔥🔥',
    },
    {
      id: '7',
      type: 'group',
      gradientColors: ['#4F2F21', '#201814'],
      avatars: [
        require('../../assets/images/ProfileImage.png'),
        require('../../assets/images/ProfileImage.png'),
        require('../../assets/images/ProfileImage.png'),
      ],
      username: 'roxy_thomas',
      viewers: 253,
      description:
        'Crazy gymnastics live being performed by 3 of us at united stadium 💪',
    },
    {
      id: '8',
      type: 'group',
      gradientColors: ['#6B523B', '#2E241B'],
      avatars: [
        require('../../assets/images/ProfileImage.png'),
        require('../../assets/images/ProfileImage.png'),
        require('../../assets/images/ProfileImage.png'),
      ],
      username: 'roxy_thomas',
      viewers: 253,
      description:
        'Let’s discuss about summer outfits I wore to my Thailand trip 👙👙',
    },
  ];

  return (
    <AppSafeAreaView
      style={{ backgroundColor: '#4D3A6E' }}
      barStyle="light-content"
    >
      <View style={styles.scroll}>
        <View style={{ paddingHorizontal: wp(4), marginBottom: wp(3) }}>
          <HeaderButtons
            onGoLivePress={() => navigation.navigate('LiveScreen1')}
          />
          <SearchBar />
        </View>

        {/* FlatList for rendering the StreamCard components */}
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <StreamCard
              type={item.type}
              gradientColors={item.gradientColors}
              //  cardStyle2={{ backgroundColor: '#2C2C54' }} // Keep background color as per your design
              avatar={item.avatar}
              avatarLeft={item.avatarLeft}
              avatarRight={item.avatarRight}
              avatars={item.avatars}
              username={item.username}
              viewers={item.viewers}
              description={item.description}
            />
          )}
          contentContainerStyle={[
            styles.grid,
            { paddingBottom: Platform.OS === 'android' ? hp(6) : hp(2) },
          ]}
        />
      </View>
    </AppSafeAreaView>
  );
};

export default LiveDiscoveryScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4D3A6E',
    paddingTop: Platform.OS === 'android' ? widthPercentageToDP(10) : 0,
  },
  scroll: {
    paddingBottom: 24,
  },
  grid: {
    marginTop: 16,
    // marginBottom: wp(20),
  },
});

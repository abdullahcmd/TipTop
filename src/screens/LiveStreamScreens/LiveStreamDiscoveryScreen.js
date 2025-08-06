import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

import HeaderButtons from '../../components/LiveStreamComponents/Header';
import StreamCard from '../../components/LiveStreamComponents/StreamCard';
import SearchBar from '../../components/LiveStreamComponents/SearchBar';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const LiveDiscoveryScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <HeaderButtons />
        <SearchBar />

        <View style={styles.grid}>
          <StreamCard
            type="solo"
            cardStyle2={{ backgroundColor: '#2C2C54' }}
            avatar={require('../../assets/images/ProfileImage.png')}
            username="roxy_thomas"
            viewers={253}
            description="Showing my new hot outfits by wearing them, come on ! 💅🏽🔥🔥🔥"
          />

          <StreamCard
            type="battle"
            cardStyle2={{ backgroundColor: 'red ' }}
            avatarLeft={require('../../assets/images/ProfileImage.png')}
            avatarRight={require('../../assets/images/ProfileImage.png')}
            username="roxy_thomas"
            viewers={253}
            description="Hello Guys! please come and help to win the battle, i am fighting 🔥🔥"
          />

          <StreamCard
            type="group"
            avatars={[
              require('../../assets/images/ProfileImage.png'),
              require('../../assets/images/ProfileImage.png'),
              require('../../assets/images/ProfileImage.png'),
            ]}
            username="roxy_thomas"
            cardStyle2={{ backgroundColor: 'red ' }}
            viewers={253}
            description="Crazy gymnastics live being performed by 3 of us at united stadium 💪"
          />

          <StreamCard
            type="group"
            avatars={[
              require('../../assets/images/ProfileImage.png'),
              require('../../assets/images/ProfileImage.png'),
              require('../../assets/images/ProfileImage.png'),
            ]}
            username="roxy_thomas"
            cardStyle2={{ backgroundColor: 'red' }}
            viewers={253}
            description="Let’s discuss about summer outfits I wore to my Thailand trip 👙👙"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

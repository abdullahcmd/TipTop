import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../components/General/Button/button1';
import UserInfoCard from '../../components/LiveStream/LiveStreamUserInfoCard';
import SummaryRow from '../../components/LiveStream/LiveStreamSummary';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LiveSummaryScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#4A00E0', '#1E1E1E']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.8 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <UserInfoCard
            avatar={require('../../assets/images/ProfileImage.png')}
            username="sofiya_stefen"
            fullname="Sofiya Stefen"
          />

          <View style={styles.summaryContainer}>
            <SummaryRow label="Streamed For" value="1h 10m 35s" />
            <SummaryRow label="Viewers" value="853" />
            <SummaryRow label="Followers Gained" value="182" />
            <SummaryRow
              label="Total Coins Collected"
              value="12563"
              subtext="Battle : 12400 + Live : 163"
            />
          </View>

          <ContinueButton
            title="Go Home"
            secondStyle={{ color: 'purple' }}
            onPress={() => navigation.replace('Home')}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LiveSummaryScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('4%'),
  },
  summaryContainer: {
    marginTop: hp('4%'),
    rowGap: hp('2%'),
  },
});

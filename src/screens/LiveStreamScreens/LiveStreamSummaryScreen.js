import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../components/button/button1';
import UserInfoCard from '../../components/LiveStreamComponents/LiveStreamUserInfoCard';
import SummaryRow from '../../components/LiveStreamComponents/LiveStreamSummary';

const LiveSummaryScreen = () => {
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
        <View style={styles.container}>
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
          <ContinueButton title="Go Home" secondStyle={{ color: 'purple' }} />
        </View>
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
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  summaryContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
  },
});

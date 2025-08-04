// SplashScreen.js
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryColors from '../../constants/colors';

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={[
        PrimaryColors.gradient_Color1,
        PrimaryColors.gradient_Color2,
        PrimaryColors.gradient_Color3,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Text style={styles.title}>Tip Top</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 25, // this doesn’t work on full screen, it's mostly aesthetic
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;

import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import LanguageOption from '../../components/LanguageSelection/Language_Bar';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../components/button/button1';
import SelectLanguage from '../../assets/svgs/SelectLanguage.svg';
import { useNavigation } from '@react-navigation/native';

const languages = [
  { native: 'عربي', english: 'Arabic' },
  { native: 'dansk', english: 'Danish' },
  { native: 'हिंदी', english: 'Hindi' },
  { native: 'bahasha Indonesia', english: 'Indonesian' },
  { native: 'عربي', english: 'Arabic' },
  { native: 'عربي', english: 'Arabic' },
  { native: 'عربي', english: 'Arabic' },
  { native: 'عربي', english: 'Arabic' },
];

const LanguageSelectionScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigation = useNavigation();
  const handleContinue = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <LinearGradient
      colors={['#ff0066', '#9999ff', '#3333ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView style={styles.safeArea}>
        {/* Fixed Top Header */}

        <SelectLanguage
          style={{ alignSelf: 'center' }}
          width={300}
          height={100}
        />

        {/* Scrollable Language List */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {languages.map((lang, index) => (
            <LanguageOption
              key={index}
              selected={index === selectedIndex}
              onPress={() => setSelectedIndex(index)}
              nativeText={lang.native}
              englishText={lang.english}
            />
          ))}
        </ScrollView>
        <View style={{ marginHorizontal: 20 }}>
          <ContinueButton onPress={handleContinue} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  svgWrapper: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  svgBackground: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
  },
  headerText: {
    alignItems: 'center',
  },
  selectText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 1,
  },
  languageText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.7)',
    letterSpacing: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
});

export default LanguageSelectionScreen;

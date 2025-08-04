import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    title: 'FROM AROUND\nTHE WORLD',
    description: 'Share your talent with the\npeople around the world',
    image: require('../../assets/images/Onboarding.png'), // Change this path
  },
  {
    id: 2,
    title: 'EXPRESS\nYOURSELF',
    description: 'Create, share and grow\nwith confidence',
    image: require('../../assets/images/Onboarding.png'), // Change this path
  },
  {
    id: 3,
    title: 'GET\nDISCOVERED',
    description: 'Be seen by millions and\ngain opportunities',
    image: require('../../assets/images/Onboarding.png'), // Change this path
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const scrollRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = event => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slideIndex);
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      scrollRef.current.scrollTo({
        x: width * (currentSlide + 1),
        animated: true,
      });
    } else {
      navigation.navigate('Login');
    }
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
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          ref={scrollRef}
        >
          {slides.map(slide => (
            <View key={slide.id} style={styles.slide}>
              <Image
                source={slide.image}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.dotsContainer}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, currentSlide === i && styles.activeDot]}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>
              {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  image: {
    width: '100%',
    height: 340,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    fontFamily: 'Benzin-Bold',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    marginTop: 30,
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 45,
    height: 1.2,
    borderRadius: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 45,
  },
  button: {
    backgroundColor: '#8988D9',
    paddingVertical: 25,
    borderRadius: 12,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default OnboardingScreen;
